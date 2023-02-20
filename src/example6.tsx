// // custom widget for checkbox with text
// const CheckboxWithText = (props: any) => {
//   const { label, ...rest } = props;
//   return (
//     <FormControlLabel
//       control={<Checkbox {...rest} />}
//       label={label}
//     />
//   );
// };
// // has two states: checked/unchecked
// const CheckboxWidget = (props: any) => {
//   const { value, ...rest } = props;
//   return (
//     <CheckboxWithText
//       {...rest}
//       checked={value}
//       value={value}
//     />
//   );
// };
// // has three states: checked/unchecked/indeterminate
// const CheckboxWidget3 = (props: any) => {
//   const { value, ...rest } = props;
//   return (
//     <CheckboxWithText
//       {...rest}
//       checked={value === true}
//       indeterminate={value === null}
//       value={value}
//     />
//   );
// };

// // two colors: green/black
// const ColorWidget = (props: any) => {
//   const { value, ...rest } = props;
//   return (
//     <CheckboxWithText
//       {...rest}
//       checked={value === 'green'}
//       value={value}
//     />
//   );
// };

// // properties: name, onChanged function
// const CheckboxWidgetExample = (props: any) => {
//   const { name, onChanged } = props;
//   return (
//     <CheckboxWidget
//       label={name}
//       onChange={onChanged}
//     />
//   );
// };

// // widget name: WebCheckboxWithText
// // properties: name, onChanged function
// const CheckboxWidget3Example = (props: any) => {
//   const { name, onChanged } = props;
//   return (
//     <CheckboxWidget3
//       label={name}
//       onChange={onChanged}
//     />
//   );
// };

// // custom widget for checkbox with text
// // has two states: checked/unchecked
// // two colors: green/black
// // properties: name, onChanged function
// // widget name: WebCheckboxWithText
// // create!
