const nodemon = require('nodemon');

export default class WebpackNodemonPlugin {
  private first = true;
  private target: string;
  private port: number;

  public constructor(inspectorPort: number, targetFile: string) {
    this.target = targetFile;
    this.port = inspectorPort;
  }

  public apply(compiler: any) {
    compiler.plugin('done', () => {
      if (this.first) {
        nodemon({
          script: this.target,
          watch: [this.target],
          nodeArgs: [`--inspect=${this.port}`],
        });
        nodemon.on('log', ({ colour }: any) => {
          console.log(colour);
        });
        this.first = false;
      }
    });
  }
}
