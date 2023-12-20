'use client';

import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'flowbite-react';

export default function BreadCrumb(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href={props.link} className="text-bluehome dark:text-white">
        <HomeOutlined />
        &nbsp;{props.title_1}
      </Breadcrumb.Item>
      <Breadcrumb.Item className="text-secondary">{props.title_2}</Breadcrumb.Item>
    </Breadcrumb>
  );
}
