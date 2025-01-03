class Logger {
  private logs: string[] = [];

  log(...args: any[]) {
    const logMessage = args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' ');
    
    this.logs.push(`${new Date().toISOString()} - ${logMessage}`);
    console.log(...args);
  }

  export() {
    console.log('=== Logs Start ===');
    console.log(this.logs.join('\n'));
    console.log('=== Logs End ===');
    return this.logs.join('\n');
  }

  clear() {
    this.logs = [];
  }
}

export const logger = new Logger();

// 添加到全局对象
if (typeof window !== 'undefined') {
  (window as any).logger = logger;
} 