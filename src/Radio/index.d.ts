import * as React from 'react';
import { RuleParamsType } from '../Rule'
type ReactNode = React.ReactNode;


declare class RadioGroup extends React.Component<RadioGroupProps, {}> {
  render(): JSX.Element;
}


declare class Radio extends React.Component<RadioProps, {}> {
  static Group: typeof RadioGroup;

  render(): JSX.Element;
}

export interface RadioProps<T = any> {

  /**
   * if not set, use (value === htmlValue).
   * checked 传入时为受控组件
   * default: -
   */
  checked?: boolean | 'indeterminate';

  /**
   * disable checkbox
   * 是否禁用
   * default: false
   */
  disabled?: boolean;

  /**
   * Specifies the result
   * 选中时返回值
   * default: true
   */
  htmlValue?: any;

  /**
   * Validation rules
   * 校验规则
   * default: -
   */
  rules?: RuleParamsType<T>;

}

export interface RadioGroupProps {

  /**
   * default value.
   * 默认值，设置 value 时，会覆盖 defaultValue
   * default: 
   */
  defaultValue?: any;

  /**
   * the data items
   * 数据项
   * default: required
   */
  data?: any[];

  /**
   * When the value is true, disabled all checkboxes; When the value is function, disable the checkbox that this function returns true.
   * 是否禁用
   * default: false
   */
  disabled?: ((data: any) => boolean) | boolean;

  /**
   * Format value. Default value, return original data. When it is a string, it will get the value from the original data as a key .The same as (d) => d[format]. When it is a function, the result returned by the function will be the value.
   * 格式化 value。默认值，返回原始数据。为string时，会作为key从原始数据中获取值，相当于 (d) => d[format]。 为函数时，以函数返回结果作为 value
   * default: d => d
   */
  format?: ((data: any) => any) | string;

  /**
   * Key generator. When it is true, the data itself is used as the key equivalent to (d => d). When it is a function, use its return value. When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id.
   * 生成每一项key的辅助方法。为 true 时，以数据项本身作为key，相当于 (d => d)。为函数时，使用此函数返回值。为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id)
   * default: required
   */
  keygen?: ((data: any) => string) | string | true;

  /**
   * The name of a Form that accesses data
   * Form 存取数据的名称
   * default: none
   */
  name?: string;

  /**
   * value is the datum.getValue()
   * value 为 datum.getValue()
   * default: none
   */
  onChange?: (value: any) => void;

  /**
   * By default, the result of the format function is used to compare whether it matches. In some cases (for example, whe an object that returns the original data is updated, an different option with the same value  is generated), the prediction function used to determine whether match.
   * (val, d) => val===format(d) | 默认使用 format 函数执行的结果来比较是否匹配，在某些情况下（例如返回原始数据的对象，更新数据时，生成了一个值相同，非同一个对象的选项），需要借助 prediction 函数来判断是否匹配 
   * default: (val, d) => val===format(d)
   */
  prediction?: (value: any, data: any) => boolean;

  /**
   * When it is a string, return d[string] When it is a function, return the result of the function.
   * 为 string 时，返回 d[string] 为 function 时，返回函数结果
   * default: required
   */
  renderItem?: ((data: any) => ReactNode) | string;

  /**
   * In the Form, value is taken over by the Form and the value will be invalid.
   * 在Form中，value会被表单接管，value无效
   * default: 
   */
  value?: any;

}

export default Radio;
