const TITLE: string = '速習TypeScript';

export function showMessage(): void {
  console.log(`ようこそ、${TITLE}！`);
}

export class Util {
// export default class {
  static getVersion(): string {
    return '1.0.0';
  }
}