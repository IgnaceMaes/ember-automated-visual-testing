import { helper } from '@ember/component/helper';

export default helper(function getDate([date]) {
  return date?.getDate();
});
