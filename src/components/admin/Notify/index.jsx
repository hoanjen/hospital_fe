"use client";

import "./style.scss";
import { Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
function Notify() {
  const items = [
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <BellOutlined />
          </div>

          <div className="notify__item--content">
            <div className="notify__item--title">Item 1</div>
            <div className="notify__item--time">8 phút trước</div>
          </div>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <BellOutlined />
          </div>

          <div className="notify__item--content">
            <div className="notify__item--title">Item 1</div>
            <div className="notify__item--time">8 phút trước</div>
          </div>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <BellOutlined />
          </div>

          <div className="notify__item--content">
            <div className="notify__item--title">Item 1</div>
            <div className="notify__item--time">8 phút trước</div>
          </div>
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__item--icon">
            <BellOutlined />
          </div>

          <div className="notify__item--content">
            <div className="notify__item--title">Item 1</div>
            <div className="notify__item--time">8 phút trước</div>
          </div>
        </div>
      ),
      key: "4",
    },
    
  ];
  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        dropdownRender={(menu) => (
          <>
            <div className="notify__dropdown">
              <div className="notify__header">
                <div className="notify__header--title">
                  <BellOutlined /> Notification
                </div>
                <Button type="link" className="btn__view">
                  View All
                </Button>
              </div>
              <div className="notify__body">{menu}</div>
            </div>
          </>
        )}
      >
        <Button type="text" icon={<BellOutlined />} />
      </Dropdown>
    </>
  );
}

export default Notify;
