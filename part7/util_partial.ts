{
  interface MyConfig {
    title: number;
    debug: boolean;
  }

  type MyConfigOption = Partial<MyConfig>

  // interface MyConfigOption {
  //   title?: number;
  //   debug?: boolean;
  // }

  let conf: MyConfigOption = {};
}