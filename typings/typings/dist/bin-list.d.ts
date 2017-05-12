export declare function help(): string;
export interface Options {
    cwd: string;
    production: boolean;
    verbose: boolean;
    unicode: boolean;
}
export declare function exec(args: string[], options: Options): Promise<void>;
