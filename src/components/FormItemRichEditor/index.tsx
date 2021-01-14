import React, { useState, useEffect, forwardRef } from 'react';
import type { EditorState } from 'braft-editor';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import { UPLOAD_URL } from '@/constant';
import Table from 'braft-extensions/dist/table';
import request from 'umi-request';
import xss from '@/utils/xss';
import MobilePreview from '../MobilePreview';

export interface FormItemRichEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  showMobile?: boolean;
  mobileTitle?: string;
}

type Ref = BraftEditor;
const FormItemRichEditor = forwardRef<Ref, FormItemRichEditorProps>(
  ({ value, onChange, showMobile, mobileTitle }, ref) => {
    const [editorState, setEditorState] = useState<EditorState>(null);

    useEffect(() => {
      if (value && !editorState) {
        setEditorState(BraftEditor.createEditorState(xss(value)));
      }
    }, [editorState, value]);

    useEffect(() => {
      // 拓展表格模块
      BraftEditor.use(Table());
    }, []);

    const handleEditorChange = (editorState: EditorState) => {
      setEditorState(editorState);
      onChange?.(xss(editorState.toHTML()));
    };

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ border: '1px solid #ccc' }}>
          <BraftEditor
            style={{ flex: 1 }}
            ref={ref}
            value={editorState}
            onChange={handleEditorChange}
            excludeControls={['emoji']}
            media={{
              uploadFn: uploadEditorMediaFiles,
            }}
          />
        </div>
        {showMobile && (
          <MobilePreview
            style={{ marginLeft: 16 }}
            htmlText={editorState ? editorState.toHTML() : ''}
            title={mobileTitle}
          />
        )}
      </div>
    );
  },
);

export default FormItemRichEditor;

async function uploadEditorMediaFiles({
  file,
  success,
  error,
}: {
  file: File;
  success: (res: {
    url: string;
    meta: {
      id: string;
      title: string;
      alt: string;
      loop: boolean;
      autoPlay: boolean;
      controls: boolean;
      poster: string;
    };
  }) => void;
  error: (err: { msg: string }) => void;
}) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('access_token', localStorage.getItem('accessToken')!);

    const result = await request(`${UPLOAD_URL}/file/uploadToPub`, {
      method: 'post',
      data: formData,
    });
    const { fileId, fileName, url } = result.data;
    success({
      url,
      meta: {
        id: `${fileId}`,
        title: fileName,
        alt: fileName,
        loop: true,
        autoPlay: true,
        controls: true,
        poster: url,
      },
    });
  } catch (err) {
    error({ msg: err.message });
  }
}
