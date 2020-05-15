import React from 'react';
import { Button } from 'antd';
import { Store } from 'antd/es/form/interface';
import { useToggle, useRequest } from '@umijs/hooks';
import { useImmer } from 'use-immer';

import OneColumnDetail from './components/OneColumnDetail';
import TwoColumnDetail from './components/TwoColumnDetail';

export default () => {
  const oneToggle = useToggle(false);
  const twoToggle = useToggle(false);
  const [detail, updateDetail] = useImmer<Store>({});

  function getDetail() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          code: '123',
          name: 'chenjie',
          simpleName: 'test',
          area: 'all',
        });
      }, 2000);
    });
  }

  const { run, loading } = useRequest(getDetail, {
    manual: true,
    onSuccess: data => {
      updateDetail(draft => Object.assign(draft, data))
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
        单列详情弹窗
      </Button>
      <Button
        type="primary"
        onClick={() => {
          twoToggle.toggle();
          run();
        }}
      >
        两列详情弹窗
      </Button>

      <OneColumnDetail
        visible={oneToggle.state}
        toggleVisible={() => oneToggle.toggle()}
        formData={detail}
        loading={loading}
      />
      <TwoColumnDetail
        visible={twoToggle.state}
        toggleVisible={() => twoToggle.toggle()}
        formData={detail}
        loading={loading}
      />
    </div>
  );
};
