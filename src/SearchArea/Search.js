import React, { useState } from "react";
import {
  Input,
  Radio,
  Select,
  Row,
  Col,
  DatePicker,
  Checkbox,
  Button,
} from "antd";
import style from "./Search.module.css";
const Option = [];

//Top radio value
const options1 = [
  {
    label: "Round trip",
    value: "Round trip",
  },
  {
    label: "One way",
    value: "one way",
  },
  {
    label: "Multi city",
    value: "Multi city",
  },
];


//buttom radio value
const plainOptions = ["Dummy", "PDT"];

const Search = () => {
  const [value1, setValue1] = useState("Apple");
  const [value4, setValue4] = useState("Apple");
  const onChange1 = ({ target: { value } }) => {
    setValue1(value);
  };

  const onChange4 = ({ target: { value } }) => {
    setValue4(value);
  };
  const onChange = (date, dateString) => {
  };
  const onChangeCheckBox = (checkedValues) => {
  };

  return (
    <>
      <h3>Master Price</h3>
      {/* top radio area */}
      <div className={style.topRadio}>
        <Radio.Group
          options={options1}
          onChange={onChange4}
          value={value4}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className={style.divider}></div>
      {/* Filter and search area */}
      <div className={style.filterArea}>
        <Row
          justify="space-between"
          align="middle"
          style={{ padding: "0px 15px", marginTop: "15px" }}
        >
          <Col xl={24} md={24}>
            <div>
              <div style={{ marginRight: 20, display: "Flex" }}>
                <Input className={style.searchInput} placeholder="LHR" />
                <Input className={style.searchInput} placeholder="CDG" />
                <DatePicker onChange={onChange} style={{ marginRight: 10 }} />
                <Select
                  showSearch
                  placeholder="Day +"
                  optionFilterProp="children"
                  style={{ marginRight: 10 }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">01</Option>
                  <Option value="2">02</Option>
                </Select>
                <Select
                  showSearch
                  placeholder="Day +"
                  optionFilterProp="children"
                  style={{ marginRight: 10 }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">01</Option>
                  <Option value="2">02</Option>
                </Select>
                <Select
                  showSearch
                  placeholder="Any Time"
                  optionFilterProp="children"
                  style={{ marginRight: 10 }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">01</Option>
                  <Option value="2">02</Option>
                </Select>

                <h2>+</h2>

                <Select
                  showSearch
                  placeholder="ADT"
                  optionFilterProp="children"
                  style={{ minWidth: 100, marginLeft: 10, marginRight: 10 }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">01</Option>
                  <Option value="2">02</Option>
                </Select>
                <Select
                  showSearch
                  placeholder="1"
                  optionFilterProp="children"
                  style={{ minWidth: 100, marginRight: 10 }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="1">01</Option>
                  <Option value="2">02</Option>
                </Select>

                <h2>+</h2>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className={style.divider}></div>
      {/* buttom radio area */}
      <div className={style.searchAreaBottom}>
        <Row>
          <Col span={8}>
            <Checkbox.Group
              style={{
                width: "100%",
              }}
              onChange={onChangeCheckBox}
            >
              <Checkbox value="A">Extra options</Checkbox>
            </Checkbox.Group>
          </Col>
          <Col span={8}>
            <span>Environment &nbsp;</span>
            <Radio.Group
              options={plainOptions}
              onChange={onChange1}
              value={value1}
            />
          </Col>
          <Col span={8}>
            <Button type="primary" size="large">
              Search
            </Button>
          </Col>
        </Row>
      </div>
      <div className={style.divider}></div>
    </>
  );
};
export default Search;
