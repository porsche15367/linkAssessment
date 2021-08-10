export interface SourceCategory {
    id: number;
    name: string;
}

export interface RootObject {
    sourceCategory: SourceCategory[];
}