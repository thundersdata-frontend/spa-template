import React from 'react';
import { Button } from 'antd';
import { Store } from 'antd/es/form/interface';
import { useToggle } from '@umijs/hooks';
import { useImmer } from 'use-immer';
import { useRequest } from 'umi';

import OneColumnForm from './components/OneColumnForm';
import TwoColumnForm from './components/TwoColumnForm';

export default () => {
  const oneToggle = useToggle(false);
  const twoToggle = useToggle(false);
  const [detail, updateDetail] = useImmer<Store>({});

  function getDetail() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            code: '123',
            name: 'chenjie',
            simpleName: 'test',
            area: 'all',
          }
        });
      }, 2000);
    });
  }

  const { run, loading } = useRequest(getDetail, {
    manual: true,
    onSuccess: data => {
      updateDetail(draft => Object.assign(draft, data));
    },
  });

  return (
    <div>
      <Button
        onClick={() => {
          oneToggle.toggle();
          run();
        }}
      >
        单列表单弹窗
      </Button>
      <Button type="primary" onClick={() => twoToggle.toggle()}>
        两列表单弹窗
      </Button>

      <OneColumnForm
        visible={oneToggle.state}
        toggleVisible={() => oneToggle.toggle()}
        formData={detail}
        loading={loading}
      />
      <TwoColumnForm
        visible={twoToggle.state}
        toggleVisible={() => twoToggle.toggle()}
        formData={detail}
        loading={loading}
      />
    </div>
  );
};
