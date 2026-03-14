import { HydratedDocument } from 'mongoose';
export type TodoDocument = HydratedDocument<Todo>;
export declare class Todo {
    title: string;
    task: string;
    done: boolean;
}
export declare const TodoSchema: import("mongoose").Schema<Todo, import("mongoose").Model<Todo, any, any, any, (import("mongoose").Document<unknown, any, Todo, any, import("mongoose").DefaultSchemaOptions> & Todo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (import("mongoose").Document<unknown, any, Todo, any, import("mongoose").DefaultSchemaOptions> & Todo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}), any, Todo>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Todo, import("mongoose").Document<unknown, {}, Todo, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    task?: import("mongoose").SchemaDefinitionProperty<string, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    done?: import("mongoose").SchemaDefinitionProperty<boolean, Todo, import("mongoose").Document<unknown, {}, Todo, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Todo & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Todo>;
