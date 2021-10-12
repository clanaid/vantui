import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import {
  ConfigProvider,
  ShareSheet,
  Calendar,
  Skeleton,
  DropdownItem,
  DropdownMenu,
  GridItem,
  Grid,
  IndexAnchor,
  IndexBar,
  Circle,
  Overlay,
  Picker,
  CollapseItem,
  Collapse,
  Rate,
  DatetimePicker,
  TreeSelect,
  Transition,
  Toast,
  Tag,
  TabbarItem,
  Tabbar,
  Tabs,
  Tab,
  Switch,
  Uploader,
  SwipeCell,
  SubmitBar,
  Sticky,
  Steps,
  Stepper,
  Slider,
  SidebarItem,
  Sidebar,
  Search,
  Row,
  RadioGroup,
  Radio,
  Progress,
  Popup,
  Panel,
  Notify,
  NoticeBar,
  NavBar,
  Loading,
  Image,
  Icon,
  GoodsActionButton,
  GoodsActionIcon,
  GoodsAction,
  Field,
  Empty,
  Divider,
  Dialog,
  CountDown,
  Col,
  CheckboxGroup,
  Checkbox,
  CellGroup,
  Cell,
  Card,
  Button,
  Area,
  ActionSheet,
  toast,
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'
const db = Taro.cloud.database()

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    areaList: {},
    loading: true,
    value: 330302,
  }

  onShow = () => {
    db.collection('region')
      .limit(1)
      .get()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          this.setState({
            loading: false,
            areaList: res.data[0],
          })
        }
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          loading: false,
        })
      })
  }

  onChange = (event) => {
    const { values } = event.detail

    toast(values.map((item) => item.name).join('-'))
  }

  onConfirm = (event) => {
    console.log(event)
  }

  onCancel = (event) => {
    console.log(event)
  }

  render() {
    const { value, loading, areaList } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Area
            value={value}
            loading={loading}
            areaList={areaList}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
          ></Area>
        </DemoBlock>
        <DemoBlock title="选中省市县">
          <Area
            value={value}
            loading={loading}
            areaList={areaList}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
          ></Area>
        </DemoBlock>
        <DemoBlock title="配置显示列">
          <Area
            title="标题"
            columnsNum={2}
            loading={loading}
            areaList={areaList}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
          ></Area>
        </DemoBlock>
        <DemoBlock title="配置列占位提示文字">
          <Area
            title="标题"
            columnsNum={2}
            loading={loading}
            areaList={areaList}
            columnsPlaceholder={['请选择', '请选择', '请选择']}
            onChange={this.onChange}
            onConfirm={this.onConfirm}
          ></Area>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}