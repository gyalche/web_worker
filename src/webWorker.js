export class WebWorker {
  constructor(worker) {
    const code = worker.toString();
    const blob = new Blob([]());
    return new Worker(URL.createObjectURL(blob));
  }
}
