import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace event {
    export enum Type {
        HTTP = 0,
        DATABASE = 1,
        SCHEDULE = 3,
        FIREHOSE = 4,
        SYSTEM = 5,
        BUCKET = 6
    }
    export class SchedulingContext extends pb_1.Message {
        constructor(data?: any[] | {
            env?: SchedulingContext.Env[];
            timeout?: number;
            batch?: SchedulingContext.Batch;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("env" in data && data.env != undefined) {
                    this.env = data.env;
                }
                if ("timeout" in data && data.timeout != undefined) {
                    this.timeout = data.timeout;
                }
                if ("batch" in data && data.batch != undefined) {
                    this.batch = data.batch;
                }
            }
        }
        get env() {
            return pb_1.Message.getRepeatedWrapperField(this, SchedulingContext.Env, 2) as SchedulingContext.Env[];
        }
        set env(value: SchedulingContext.Env[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get timeout() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set timeout(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get batch() {
            return pb_1.Message.getWrapperField(this, SchedulingContext.Batch, 4) as SchedulingContext.Batch;
        }
        set batch(value: SchedulingContext.Batch) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        toObject() {
            var data: {
                env?: ReturnType<typeof SchedulingContext.Env.prototype.toObject>[];
                timeout?: number;
                batch?: ReturnType<typeof SchedulingContext.Batch.prototype.toObject>;
            } = {};
            if (this.env != null) {
                data.env = this.env.map((item: SchedulingContext.Env) => item.toObject());
            }
            if (this.timeout != null) {
                data.timeout = this.timeout;
            }
            if (this.batch != null) {
                data.batch = this.batch.toObject();
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.env !== undefined)
                writer.writeRepeatedMessage(2, this.env, (item: SchedulingContext.Env) => item.serialize(writer));
            if (this.timeout !== undefined)
                writer.writeInt32(3, this.timeout);
            if (this.batch !== undefined)
                writer.writeMessage(4, this.batch, () => this.batch.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SchedulingContext {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new SchedulingContext();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 2:
                        reader.readMessage(message.env, () => pb_1.Message.addToRepeatedWrapperField(message, 2, SchedulingContext.Env.deserialize(reader), SchedulingContext.Env));
                        break;
                    case 3:
                        message.timeout = reader.readInt32();
                        break;
                    case 4:
                        reader.readMessage(message.batch, () => message.batch = SchedulingContext.Batch.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SchedulingContext {
            return SchedulingContext.deserialize(bytes);
        }
    }
    export namespace SchedulingContext {
        export class Env extends pb_1.Message {
            constructor(data?: any[] | {
                key?: string;
                value?: string;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("key" in data && data.key != undefined) {
                        this.key = data.key;
                    }
                    if ("value" in data && data.value != undefined) {
                        this.value = data.value;
                    }
                }
            }
            get key() {
                return pb_1.Message.getField(this, 1) as string;
            }
            set key(value: string) {
                pb_1.Message.setField(this, 1, value);
            }
            get value() {
                return pb_1.Message.getField(this, 2) as string;
            }
            set value(value: string) {
                pb_1.Message.setField(this, 2, value);
            }
            toObject() {
                var data: {
                    key?: string;
                    value?: string;
                } = {};
                if (this.key != null) {
                    data.key = this.key;
                }
                if (this.value != null) {
                    data.value = this.value;
                }
                return data;
            }
            serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
                const writer = w || new pb_1.BinaryWriter();
                if (typeof this.key === "string" && this.key.length)
                    writer.writeString(1, this.key);
                if (typeof this.value === "string" && this.value.length)
                    writer.writeString(2, this.value);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Env {
                const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Env();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.key = reader.readString();
                            break;
                        case 2:
                            message.value = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Env {
                return Env.deserialize(bytes);
            }
        }
        export class Batch extends pb_1.Message {
            constructor(data?: any[] | {
                limit?: number;
                deadline?: number;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") {
                    if ("limit" in data && data.limit != undefined) {
                        this.limit = data.limit;
                    }
                    if ("deadline" in data && data.deadline != undefined) {
                        this.deadline = data.deadline;
                    }
                }
            }
            get limit() {
                return pb_1.Message.getField(this, 1) as number;
            }
            set limit(value: number) {
                pb_1.Message.setField(this, 1, value);
            }
            get deadline() {
                return pb_1.Message.getField(this, 2) as number;
            }
            set deadline(value: number) {
                pb_1.Message.setField(this, 2, value);
            }
            toObject() {
                var data: {
                    limit?: number;
                    deadline?: number;
                } = {};
                if (this.limit != null) {
                    data.limit = this.limit;
                }
                if (this.deadline != null) {
                    data.deadline = this.deadline;
                }
                return data;
            }
            serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
                const writer = w || new pb_1.BinaryWriter();
                if (this.limit !== undefined)
                    writer.writeUint64(1, this.limit);
                if (this.deadline !== undefined)
                    writer.writeUint64(2, this.deadline);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Batch {
                const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Batch();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.limit = reader.readUint64();
                            break;
                        case 2:
                            message.deadline = reader.readUint64();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Batch {
                return Batch.deserialize(bytes);
            }
        }
    }
    export class Target extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            cwd?: string;
            handler?: string;
            context?: SchedulingContext;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("cwd" in data && data.cwd != undefined) {
                    this.cwd = data.cwd;
                }
                if ("handler" in data && data.handler != undefined) {
                    this.handler = data.handler;
                }
                if ("context" in data && data.context != undefined) {
                    this.context = data.context;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get cwd() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set cwd(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get handler() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set handler(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get context() {
            return pb_1.Message.getWrapperField(this, SchedulingContext, 4) as SchedulingContext;
        }
        set context(value: SchedulingContext) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        toObject() {
            var data: {
                id?: string;
                cwd?: string;
                handler?: string;
                context?: ReturnType<typeof SchedulingContext.prototype.toObject>;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.cwd != null) {
                data.cwd = this.cwd;
            }
            if (this.handler != null) {
                data.handler = this.handler;
            }
            if (this.context != null) {
                data.context = this.context.toObject();
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (typeof this.cwd === "string" && this.cwd.length)
                writer.writeString(2, this.cwd);
            if (typeof this.handler === "string" && this.handler.length)
                writer.writeString(3, this.handler);
            if (this.context !== undefined)
                writer.writeMessage(4, this.context, () => this.context.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Target {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Target();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.cwd = reader.readString();
                        break;
                    case 3:
                        message.handler = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message.context, () => message.context = SchedulingContext.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Target {
            return Target.deserialize(bytes);
        }
    }
    export class Event extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            type?: Type;
            target?: Target;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("type" in data && data.type != undefined) {
                    this.type = data.type;
                }
                if ("target" in data && data.target != undefined) {
                    this.target = data.target;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get type() {
            return pb_1.Message.getField(this, 2) as Type;
        }
        set type(value: Type) {
            pb_1.Message.setField(this, 2, value);
        }
        get target() {
            return pb_1.Message.getWrapperField(this, Target, 3) as Target;
        }
        set target(value: Target) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        toObject() {
            var data: {
                id?: string;
                type?: Type;
                target?: ReturnType<typeof Target.prototype.toObject>;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.type != null) {
                data.type = this.type;
            }
            if (this.target != null) {
                data.target = this.target.toObject();
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (this.type !== undefined)
                writer.writeEnum(2, this.type);
            if (this.target !== undefined)
                writer.writeMessage(3, this.target, () => this.target.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Event {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Event();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.type = reader.readEnum();
                        break;
                    case 3:
                        reader.readMessage(message.target, () => message.target = Target.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Event {
            return Event.deserialize(bytes);
        }
    }
    export class Pop extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            var data: {
                id?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Pop {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Pop();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Pop {
            return Pop.deserialize(bytes);
        }
    }
    export class Complete extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            var data: {
                id?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Complete {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Complete();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Complete {
            return Complete.deserialize(bytes);
        }
    }
    export namespace Complete {
        export class Result extends pb_1.Message {
            constructor(data?: any[] | {}) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
                if (!Array.isArray(data) && typeof data == "object") { }
            }
            toObject() {
                var data: {} = {};
                return data;
            }
            serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
                const writer = w || new pb_1.BinaryWriter();
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Result {
                const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Result();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        default: reader.skipField();
                    }
                }
                return message;
            }
            serializeBinary(): Uint8Array {
                return this.serialize();
            }
            static deserializeBinary(bytes: Uint8Array): Result {
                return Result.deserialize(bytes);
            }
        }
    }
    export interface IQueueService extends grpc_1.ServiceDefinition<grpc_1.UntypedServiceImplementation> {
        pop: grpc_1.MethodDefinition<Pop, Event>;
        complete: grpc_1.MethodDefinition<Complete, Complete.Result>;
    }
    export interface IQueueServer extends grpc_1.UntypedServiceImplementation {
        pop: grpc_1.handleUnaryCall<Pop, Event>;
        complete: grpc_1.handleUnaryCall<Complete, Complete.Result>;
    }
    export const Queue = {
        pop: {
            path: "/event.Queue/pop",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: Pop) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => Pop.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: Event) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => Event.deserialize(new Uint8Array(bytes))
        },
        complete: {
            path: "/event.Queue/complete",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: Complete) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => Complete.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: Complete.Result) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => Complete.Result.deserialize(new Uint8Array(bytes))
        }
    };
    export class QueueClient extends grpc_1.makeGenericClientConstructor(Queue, "Queue", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options)
        }
        pop(request: Pop, metadata?: grpc_1.Metadata): Promise<Event> {
            return new Promise((resolve, reject) => super["pop"](request, metadata, (error: grpc_1.ServiceError, response: Event) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(response);
                }
            }));
        }
        complete(request: Complete, metadata?: grpc_1.Metadata): Promise<Complete.Result> {
            return new Promise((resolve, reject) => super["complete"](request, metadata, (error: grpc_1.ServiceError, response: Complete.Result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(response);
                }
            }));
        }
    }
}
