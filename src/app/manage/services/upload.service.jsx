import ImgCrop from 'antd-img-crop';
import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';

const UploadImage = (props) => {
  const onFileListChange = props.onFileListChange;
  const [defaultWidth, setDefaultWidth] = useState(100);
  const [defaultHeight, setDefaultHeight] = useState(100);

  const defaultImage = props.url
    ? [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: props.url,
        },
      ]
    : [];
  const [fileList, setFileList] = useState(defaultImage);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (onFileListChange) {
      onFileListChange(newFileList);
    }
    if (fileList.length > 0) {
      const img = new Image();
      img.src = URL.createObjectURL(fileList[0].originFileObj);
      img.onload = () => {
        setDefaultWidth(img.width);
        setDefaultHeight(img.height);
      };
    }
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    if (typeof window !== undefined) {
      imgWindow?.document.write(image.outerHTML);
    }
  };
  return (
    <ImgCrop
      rotationSlider
      modalTitle="Chỉnh sửa hình ảnh"
      modalOk="Xong"
      modalCancel="Hủy"
      aspectSlider
      showGrid
      showReset
    >
      <Upload
        style={{ width: '1000px', height: '150px' }}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        maxCount={1}
      >
        {fileList.length == 0 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default UploadImage;
