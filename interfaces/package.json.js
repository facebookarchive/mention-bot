declare module "./package.json" {
  declare var config: {
    gheHost: string,
    ghePathPrefix: string,
    gheProtocol: string,
    ghePort: number,
  };
}
