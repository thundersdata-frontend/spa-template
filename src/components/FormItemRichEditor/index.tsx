import React, { useState, useEffect, forwardRef } from 'react';
import BraftEditor, { EditorState } from 'braft-editor';
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css';
import { UPLOAD_URL } from '@/constant';
import Table from 'braft-extensions/dist/table';
import request from 'umi-request';
import xss from 'xss';

interface FormItemRichEditorProps {
  value?: string;
  onChange?: (value: string) => void;
}

type Ref = BraftEditor;
const FormItemRichEditor = forwardRef<Ref, FormItemRichEditorProps>(({ value, onChange }, ref) => {
  const [editorState, setEditorState] = useState<EditorState>(null);

  useEffect(() => {
    // 拓展表格模块
    BraftEditor.use(Table());
  }, []);

  const handleEditorChange = (editorState: EditorState) => {
    setEditorState(editorState);
    if (onChange) {
      onChange(editorState.toHTML());
    }
  };

  return (
    <div style={{ border: '1px solid #ccc' }}>
      <BraftEditor
        ref={ref}
        defaultValue={value && BraftEditor.createEditorState(xss(value))}
        value={editorState}
        onChange={handleEditorChange}
        excludeControls={['emoji']}
        media={{
          uploadFn: uploadEditorMediaFiles,
        }}
      />
    </div>
  );
});

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
