export const T = (t: number) => {
  return (target: Function) => {};
};
const printMemberName = (target: any, memberName: string) => {
  console.log(memberName);
};
