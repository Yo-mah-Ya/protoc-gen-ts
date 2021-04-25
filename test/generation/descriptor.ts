import * as pb_1 from "google-protobuf";
export class FileDescriptorSet extends pb_1.Message {
    constructor(data?: any[] | {
        file: FileDescriptorProto[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.file = data.file;
        }
    }
    get file() {
        return pb_1.Message.getRepeatedWrapperField(this, FileDescriptorProto, 1) as FileDescriptorProto[];
    }
    set file(value: FileDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        var data: {
            file: ReturnType<typeof FileDescriptorProto.prototype.toObject>[];
        } = {
            file: this.file.map((item: FileDescriptorProto) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.file !== undefined)
            writer.writeRepeatedMessage(1, this.file, (item: FileDescriptorProto) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileDescriptorSet {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FileDescriptorSet();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.file, () => pb_1.Message.addToRepeatedWrapperField(message, 1, FileDescriptorProto.deserialize(reader), FileDescriptorProto));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FileDescriptorSet {
        return FileDescriptorSet.deserialize(bytes);
    }
}
export class FileDescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        package?: string;
        dependency: string[];
        public_dependency: number[];
        weak_dependency: number[];
        message_type: DescriptorProto[];
        enum_type: EnumDescriptorProto[];
        service: ServiceDescriptorProto[];
        extension: FieldDescriptorProto[];
        options?: FileOptions;
        source_code_info?: SourceCodeInfo;
        syntax?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 10, 11, 4, 5, 6, 7], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("package" in data && data.package != undefined) {
                this.package = data.package;
            }
            this.dependency = data.dependency;
            this.public_dependency = data.public_dependency;
            this.weak_dependency = data.weak_dependency;
            this.message_type = data.message_type;
            this.enum_type = data.enum_type;
            this.service = data.service;
            this.extension = data.extension;
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
            if ("source_code_info" in data && data.source_code_info != undefined) {
                this.source_code_info = data.source_code_info;
            }
            if ("syntax" in data && data.syntax != undefined) {
                this.syntax = data.syntax;
            }
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get package() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set package(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get dependency() {
        return pb_1.Message.getField(this, 3) as string[];
    }
    set dependency(value: string[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get public_dependency() {
        return pb_1.Message.getField(this, 10) as number[];
    }
    set public_dependency(value: number[]) {
        pb_1.Message.setField(this, 10, value);
    }
    get weak_dependency() {
        return pb_1.Message.getField(this, 11) as number[];
    }
    set weak_dependency(value: number[]) {
        pb_1.Message.setField(this, 11, value);
    }
    get message_type() {
        return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto, 4) as DescriptorProto[];
    }
    set message_type(value: DescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get enum_type() {
        return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto, 5) as EnumDescriptorProto[];
    }
    set enum_type(value: EnumDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    get service() {
        return pb_1.Message.getRepeatedWrapperField(this, ServiceDescriptorProto, 6) as ServiceDescriptorProto[];
    }
    set service(value: ServiceDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get extension() {
        return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 7) as FieldDescriptorProto[];
    }
    set extension(value: FieldDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 7, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, FileOptions, 8) as FileOptions;
    }
    set options(value: FileOptions) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get source_code_info() {
        return pb_1.Message.getWrapperField(this, SourceCodeInfo, 9) as SourceCodeInfo;
    }
    set source_code_info(value: SourceCodeInfo) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get syntax() {
        return pb_1.Message.getField(this, 12) as string;
    }
    set syntax(value: string) {
        pb_1.Message.setField(this, 12, value);
    }
    toObject() {
        var data: {
            name?: string;
            package?: string;
            dependency: string[];
            public_dependency: number[];
            weak_dependency: number[];
            message_type: ReturnType<typeof DescriptorProto.prototype.toObject>[];
            enum_type: ReturnType<typeof EnumDescriptorProto.prototype.toObject>[];
            service: ReturnType<typeof ServiceDescriptorProto.prototype.toObject>[];
            extension: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof FileOptions.prototype.toObject>;
            source_code_info?: ReturnType<typeof SourceCodeInfo.prototype.toObject>;
            syntax?: string;
        } = {
            dependency: this.dependency,
            public_dependency: this.public_dependency,
            weak_dependency: this.weak_dependency,
            message_type: this.message_type.map((item: DescriptorProto) => item.toObject()),
            enum_type: this.enum_type.map((item: EnumDescriptorProto) => item.toObject()),
            service: this.service.map((item: ServiceDescriptorProto) => item.toObject()),
            extension: this.extension.map((item: FieldDescriptorProto) => item.toObject())
        };
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.package != null) {
            data.package = this.package;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        if (this.source_code_info != null) {
            data.source_code_info = this.source_code_info.toObject();
        }
        if (this.syntax != null) {
            data.syntax = this.syntax;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (typeof this.package === "string" && this.package.length)
            writer.writeString(2, this.package);
        if (this.dependency !== undefined)
            writer.writeRepeatedString(3, this.dependency);
        if (this.public_dependency !== undefined)
            writer.writePackedInt32(10, this.public_dependency);
        if (this.weak_dependency !== undefined)
            writer.writePackedInt32(11, this.weak_dependency);
        if (this.message_type !== undefined)
            writer.writeRepeatedMessage(4, this.message_type, (item: DescriptorProto) => item.serialize(writer));
        if (this.enum_type !== undefined)
            writer.writeRepeatedMessage(5, this.enum_type, (item: EnumDescriptorProto) => item.serialize(writer));
        if (this.service !== undefined)
            writer.writeRepeatedMessage(6, this.service, (item: ServiceDescriptorProto) => item.serialize(writer));
        if (this.extension !== undefined)
            writer.writeRepeatedMessage(7, this.extension, (item: FieldDescriptorProto) => item.serialize(writer));
        if (this.options !== undefined)
            writer.writeMessage(8, this.options, () => this.options.serialize(writer));
        if (this.source_code_info !== undefined)
            writer.writeMessage(9, this.source_code_info, () => this.source_code_info.serialize(writer));
        if (typeof this.syntax === "string" && this.syntax.length)
            writer.writeString(12, this.syntax);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileDescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FileDescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    message.package = reader.readString();
                    break;
                case 3:
                    pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                    break;
                case 10:
                    message.public_dependency = reader.readPackedInt32();
                    break;
                case 11:
                    message.weak_dependency = reader.readPackedInt32();
                    break;
                case 4:
                    reader.readMessage(message.message_type, () => pb_1.Message.addToRepeatedWrapperField(message, 4, DescriptorProto.deserialize(reader), DescriptorProto));
                    break;
                case 5:
                    reader.readMessage(message.enum_type, () => pb_1.Message.addToRepeatedWrapperField(message, 5, EnumDescriptorProto.deserialize(reader), EnumDescriptorProto));
                    break;
                case 6:
                    reader.readMessage(message.service, () => pb_1.Message.addToRepeatedWrapperField(message, 6, ServiceDescriptorProto.deserialize(reader), ServiceDescriptorProto));
                    break;
                case 7:
                    reader.readMessage(message.extension, () => pb_1.Message.addToRepeatedWrapperField(message, 7, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto));
                    break;
                case 8:
                    reader.readMessage(message.options, () => message.options = FileOptions.deserialize(reader));
                    break;
                case 9:
                    reader.readMessage(message.source_code_info, () => message.source_code_info = SourceCodeInfo.deserialize(reader));
                    break;
                case 12:
                    message.syntax = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FileDescriptorProto {
        return FileDescriptorProto.deserialize(bytes);
    }
}
export class DescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        field: FieldDescriptorProto[];
        extension: FieldDescriptorProto[];
        nested_type: DescriptorProto[];
        enum_type: EnumDescriptorProto[];
        extension_range: DescriptorProto.ExtensionRange[];
        oneof_decl: OneofDescriptorProto[];
        options?: MessageOptions;
        reserved_range: DescriptorProto.ReservedRange[];
        reserved_name: string[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 6, 3, 4, 5, 8, 9, 10], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            this.field = data.field;
            this.extension = data.extension;
            this.nested_type = data.nested_type;
            this.enum_type = data.enum_type;
            this.extension_range = data.extension_range;
            this.oneof_decl = data.oneof_decl;
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
            this.reserved_range = data.reserved_range;
            this.reserved_name = data.reserved_name;
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get field() {
        return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 2) as FieldDescriptorProto[];
    }
    set field(value: FieldDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get extension() {
        return pb_1.Message.getRepeatedWrapperField(this, FieldDescriptorProto, 6) as FieldDescriptorProto[];
    }
    set extension(value: FieldDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 6, value);
    }
    get nested_type() {
        return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto, 3) as DescriptorProto[];
    }
    set nested_type(value: DescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    get enum_type() {
        return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto, 4) as EnumDescriptorProto[];
    }
    set enum_type(value: EnumDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get extension_range() {
        return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto.ExtensionRange, 5) as DescriptorProto.ExtensionRange[];
    }
    set extension_range(value: DescriptorProto.ExtensionRange[]) {
        pb_1.Message.setRepeatedWrapperField(this, 5, value);
    }
    get oneof_decl() {
        return pb_1.Message.getRepeatedWrapperField(this, OneofDescriptorProto, 8) as OneofDescriptorProto[];
    }
    set oneof_decl(value: OneofDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 8, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, MessageOptions, 7) as MessageOptions;
    }
    set options(value: MessageOptions) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get reserved_range() {
        return pb_1.Message.getRepeatedWrapperField(this, DescriptorProto.ReservedRange, 9) as DescriptorProto.ReservedRange[];
    }
    set reserved_range(value: DescriptorProto.ReservedRange[]) {
        pb_1.Message.setRepeatedWrapperField(this, 9, value);
    }
    get reserved_name() {
        return pb_1.Message.getField(this, 10) as string[];
    }
    set reserved_name(value: string[]) {
        pb_1.Message.setField(this, 10, value);
    }
    toObject() {
        var data: {
            name?: string;
            field: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            extension: ReturnType<typeof FieldDescriptorProto.prototype.toObject>[];
            nested_type: ReturnType<typeof DescriptorProto.prototype.toObject>[];
            enum_type: ReturnType<typeof EnumDescriptorProto.prototype.toObject>[];
            extension_range: ReturnType<typeof DescriptorProto.ExtensionRange.prototype.toObject>[];
            oneof_decl: ReturnType<typeof OneofDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof MessageOptions.prototype.toObject>;
            reserved_range: ReturnType<typeof DescriptorProto.ReservedRange.prototype.toObject>[];
            reserved_name: string[];
        } = {
            field: this.field.map((item: FieldDescriptorProto) => item.toObject()),
            extension: this.extension.map((item: FieldDescriptorProto) => item.toObject()),
            nested_type: this.nested_type.map((item: DescriptorProto) => item.toObject()),
            enum_type: this.enum_type.map((item: EnumDescriptorProto) => item.toObject()),
            extension_range: this.extension_range.map((item: DescriptorProto.ExtensionRange) => item.toObject()),
            oneof_decl: this.oneof_decl.map((item: OneofDescriptorProto) => item.toObject()),
            reserved_range: this.reserved_range.map((item: DescriptorProto.ReservedRange) => item.toObject()),
            reserved_name: this.reserved_name
        };
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (this.field !== undefined)
            writer.writeRepeatedMessage(2, this.field, (item: FieldDescriptorProto) => item.serialize(writer));
        if (this.extension !== undefined)
            writer.writeRepeatedMessage(6, this.extension, (item: FieldDescriptorProto) => item.serialize(writer));
        if (this.nested_type !== undefined)
            writer.writeRepeatedMessage(3, this.nested_type, (item: DescriptorProto) => item.serialize(writer));
        if (this.enum_type !== undefined)
            writer.writeRepeatedMessage(4, this.enum_type, (item: EnumDescriptorProto) => item.serialize(writer));
        if (this.extension_range !== undefined)
            writer.writeRepeatedMessage(5, this.extension_range, (item: DescriptorProto.ExtensionRange) => item.serialize(writer));
        if (this.oneof_decl !== undefined)
            writer.writeRepeatedMessage(8, this.oneof_decl, (item: OneofDescriptorProto) => item.serialize(writer));
        if (this.options !== undefined)
            writer.writeMessage(7, this.options, () => this.options.serialize(writer));
        if (this.reserved_range !== undefined)
            writer.writeRepeatedMessage(9, this.reserved_range, (item: DescriptorProto.ReservedRange) => item.serialize(writer));
        if (this.reserved_name !== undefined)
            writer.writeRepeatedString(10, this.reserved_name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.field, () => pb_1.Message.addToRepeatedWrapperField(message, 2, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto));
                    break;
                case 6:
                    reader.readMessage(message.extension, () => pb_1.Message.addToRepeatedWrapperField(message, 6, FieldDescriptorProto.deserialize(reader), FieldDescriptorProto));
                    break;
                case 3:
                    reader.readMessage(message.nested_type, () => pb_1.Message.addToRepeatedWrapperField(message, 3, DescriptorProto.deserialize(reader), DescriptorProto));
                    break;
                case 4:
                    reader.readMessage(message.enum_type, () => pb_1.Message.addToRepeatedWrapperField(message, 4, EnumDescriptorProto.deserialize(reader), EnumDescriptorProto));
                    break;
                case 5:
                    reader.readMessage(message.extension_range, () => pb_1.Message.addToRepeatedWrapperField(message, 5, DescriptorProto.ExtensionRange.deserialize(reader), DescriptorProto.ExtensionRange));
                    break;
                case 8:
                    reader.readMessage(message.oneof_decl, () => pb_1.Message.addToRepeatedWrapperField(message, 8, OneofDescriptorProto.deserialize(reader), OneofDescriptorProto));
                    break;
                case 7:
                    reader.readMessage(message.options, () => message.options = MessageOptions.deserialize(reader));
                    break;
                case 9:
                    reader.readMessage(message.reserved_range, () => pb_1.Message.addToRepeatedWrapperField(message, 9, DescriptorProto.ReservedRange.deserialize(reader), DescriptorProto.ReservedRange));
                    break;
                case 10:
                    pb_1.Message.addToRepeatedField(message, 10, reader.readString());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DescriptorProto {
        return DescriptorProto.deserialize(bytes);
    }
}
export namespace DescriptorProto {
    export class ExtensionRange extends pb_1.Message {
        constructor(data?: any[] | {
            start?: number;
            end?: number;
            options?: ExtensionRangeOptions;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("start" in data && data.start != undefined) {
                    this.start = data.start;
                }
                if ("end" in data && data.end != undefined) {
                    this.end = data.end;
                }
                if ("options" in data && data.options != undefined) {
                    this.options = data.options;
                }
            }
        }
        get start() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set start(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get end() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get options() {
            return pb_1.Message.getWrapperField(this, ExtensionRangeOptions, 3) as ExtensionRangeOptions;
        }
        set options(value: ExtensionRangeOptions) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        toObject() {
            var data: {
                start?: number;
                end?: number;
                options?: ReturnType<typeof ExtensionRangeOptions.prototype.toObject>;
            } = {};
            if (this.start != null) {
                data.start = this.start;
            }
            if (this.end != null) {
                data.end = this.end;
            }
            if (this.options != null) {
                data.options = this.options.toObject();
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.start !== undefined)
                writer.writeInt32(1, this.start);
            if (this.end !== undefined)
                writer.writeInt32(2, this.end);
            if (this.options !== undefined)
                writer.writeMessage(3, this.options, () => this.options.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtensionRange {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ExtensionRange();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.start = reader.readInt32();
                        break;
                    case 2:
                        message.end = reader.readInt32();
                        break;
                    case 3:
                        reader.readMessage(message.options, () => message.options = ExtensionRangeOptions.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ExtensionRange {
            return ExtensionRange.deserialize(bytes);
        }
    }
    export class ReservedRange extends pb_1.Message {
        constructor(data?: any[] | {
            start?: number;
            end?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("start" in data && data.start != undefined) {
                    this.start = data.start;
                }
                if ("end" in data && data.end != undefined) {
                    this.end = data.end;
                }
            }
        }
        get start() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set start(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get end() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            var data: {
                start?: number;
                end?: number;
            } = {};
            if (this.start != null) {
                data.start = this.start;
            }
            if (this.end != null) {
                data.end = this.end;
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.start !== undefined)
                writer.writeInt32(1, this.start);
            if (this.end !== undefined)
                writer.writeInt32(2, this.end);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ReservedRange {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ReservedRange();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.start = reader.readInt32();
                        break;
                    case 2:
                        message.end = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ReservedRange {
            return ReservedRange.deserialize(bytes);
        }
    }
}
export class ExtensionRangeOptions extends pb_1.Message {
    constructor(data?: any[] | {
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtensionRangeOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ExtensionRangeOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ExtensionRangeOptions {
        return ExtensionRangeOptions.deserialize(bytes);
    }
}
export class FieldDescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        number?: number;
        label?: FieldDescriptorProto.Label;
        type?: FieldDescriptorProto.Type;
        type_name?: string;
        extendee?: string;
        default_value?: string;
        oneof_index?: number;
        json_name?: string;
        options?: FieldOptions;
        proto3_optional?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("number" in data && data.number != undefined) {
                this.number = data.number;
            }
            if ("label" in data && data.label != undefined) {
                this.label = data.label;
            }
            if ("type" in data && data.type != undefined) {
                this.type = data.type;
            }
            if ("type_name" in data && data.type_name != undefined) {
                this.type_name = data.type_name;
            }
            if ("extendee" in data && data.extendee != undefined) {
                this.extendee = data.extendee;
            }
            if ("default_value" in data && data.default_value != undefined) {
                this.default_value = data.default_value;
            }
            if ("oneof_index" in data && data.oneof_index != undefined) {
                this.oneof_index = data.oneof_index;
            }
            if ("json_name" in data && data.json_name != undefined) {
                this.json_name = data.json_name;
            }
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
            if ("proto3_optional" in data && data.proto3_optional != undefined) {
                this.proto3_optional = data.proto3_optional;
            }
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get number() {
        return pb_1.Message.getField(this, 3) as number;
    }
    set number(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get label() {
        return pb_1.Message.getField(this, 4) as FieldDescriptorProto.Label;
    }
    set label(value: FieldDescriptorProto.Label) {
        pb_1.Message.setField(this, 4, value);
    }
    get type() {
        return pb_1.Message.getField(this, 5) as FieldDescriptorProto.Type;
    }
    set type(value: FieldDescriptorProto.Type) {
        pb_1.Message.setField(this, 5, value);
    }
    get type_name() {
        return pb_1.Message.getField(this, 6) as string;
    }
    set type_name(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get extendee() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set extendee(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get default_value() {
        return pb_1.Message.getField(this, 7) as string;
    }
    set default_value(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    get oneof_index() {
        return pb_1.Message.getField(this, 9) as number;
    }
    set oneof_index(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get json_name() {
        return pb_1.Message.getField(this, 10) as string;
    }
    set json_name(value: string) {
        pb_1.Message.setField(this, 10, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, FieldOptions, 8) as FieldOptions;
    }
    set options(value: FieldOptions) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get proto3_optional() {
        return pb_1.Message.getField(this, 17) as boolean;
    }
    set proto3_optional(value: boolean) {
        pb_1.Message.setField(this, 17, value);
    }
    toObject() {
        var data: {
            name?: string;
            number?: number;
            label?: FieldDescriptorProto.Label;
            type?: FieldDescriptorProto.Type;
            type_name?: string;
            extendee?: string;
            default_value?: string;
            oneof_index?: number;
            json_name?: string;
            options?: ReturnType<typeof FieldOptions.prototype.toObject>;
            proto3_optional?: boolean;
        } = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.number != null) {
            data.number = this.number;
        }
        if (this.label != null) {
            data.label = this.label;
        }
        if (this.type != null) {
            data.type = this.type;
        }
        if (this.type_name != null) {
            data.type_name = this.type_name;
        }
        if (this.extendee != null) {
            data.extendee = this.extendee;
        }
        if (this.default_value != null) {
            data.default_value = this.default_value;
        }
        if (this.oneof_index != null) {
            data.oneof_index = this.oneof_index;
        }
        if (this.json_name != null) {
            data.json_name = this.json_name;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        if (this.proto3_optional != null) {
            data.proto3_optional = this.proto3_optional;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (this.number !== undefined)
            writer.writeInt32(3, this.number);
        if (this.label !== undefined)
            writer.writeEnum(4, this.label);
        if (this.type !== undefined)
            writer.writeEnum(5, this.type);
        if (typeof this.type_name === "string" && this.type_name.length)
            writer.writeString(6, this.type_name);
        if (typeof this.extendee === "string" && this.extendee.length)
            writer.writeString(2, this.extendee);
        if (typeof this.default_value === "string" && this.default_value.length)
            writer.writeString(7, this.default_value);
        if (this.oneof_index !== undefined)
            writer.writeInt32(9, this.oneof_index);
        if (typeof this.json_name === "string" && this.json_name.length)
            writer.writeString(10, this.json_name);
        if (this.options !== undefined)
            writer.writeMessage(8, this.options, () => this.options.serialize(writer));
        if (this.proto3_optional !== undefined)
            writer.writeBool(17, this.proto3_optional);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FieldDescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FieldDescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 3:
                    message.number = reader.readInt32();
                    break;
                case 4:
                    message.label = reader.readEnum();
                    break;
                case 5:
                    message.type = reader.readEnum();
                    break;
                case 6:
                    message.type_name = reader.readString();
                    break;
                case 2:
                    message.extendee = reader.readString();
                    break;
                case 7:
                    message.default_value = reader.readString();
                    break;
                case 9:
                    message.oneof_index = reader.readInt32();
                    break;
                case 10:
                    message.json_name = reader.readString();
                    break;
                case 8:
                    reader.readMessage(message.options, () => message.options = FieldOptions.deserialize(reader));
                    break;
                case 17:
                    message.proto3_optional = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FieldDescriptorProto {
        return FieldDescriptorProto.deserialize(bytes);
    }
}
export namespace FieldDescriptorProto {
    export enum Type {
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18
    }
    export enum Label {
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3
    }
}
export class OneofDescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        options?: OneofOptions;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, OneofOptions, 2) as OneofOptions;
    }
    set options(value: OneofOptions) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    toObject() {
        var data: {
            name?: string;
            options?: ReturnType<typeof OneofOptions.prototype.toObject>;
        } = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (this.options !== undefined)
            writer.writeMessage(2, this.options, () => this.options.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneofDescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new OneofDescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.options, () => message.options = OneofOptions.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): OneofDescriptorProto {
        return OneofDescriptorProto.deserialize(bytes);
    }
}
export class EnumDescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        value: EnumValueDescriptorProto[];
        options?: EnumOptions;
        reserved_range: EnumDescriptorProto.EnumReservedRange[];
        reserved_name: string[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 4, 5], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            this.value = data.value;
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
            this.reserved_range = data.reserved_range;
            this.reserved_name = data.reserved_name;
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get value() {
        return pb_1.Message.getRepeatedWrapperField(this, EnumValueDescriptorProto, 2) as EnumValueDescriptorProto[];
    }
    set value(value: EnumValueDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, EnumOptions, 3) as EnumOptions;
    }
    set options(value: EnumOptions) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get reserved_range() {
        return pb_1.Message.getRepeatedWrapperField(this, EnumDescriptorProto.EnumReservedRange, 4) as EnumDescriptorProto.EnumReservedRange[];
    }
    set reserved_range(value: EnumDescriptorProto.EnumReservedRange[]) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    get reserved_name() {
        return pb_1.Message.getField(this, 5) as string[];
    }
    set reserved_name(value: string[]) {
        pb_1.Message.setField(this, 5, value);
    }
    toObject() {
        var data: {
            name?: string;
            value: ReturnType<typeof EnumValueDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof EnumOptions.prototype.toObject>;
            reserved_range: ReturnType<typeof EnumDescriptorProto.EnumReservedRange.prototype.toObject>[];
            reserved_name: string[];
        } = {
            value: this.value.map((item: EnumValueDescriptorProto) => item.toObject()),
            reserved_range: this.reserved_range.map((item: EnumDescriptorProto.EnumReservedRange) => item.toObject()),
            reserved_name: this.reserved_name
        };
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (this.value !== undefined)
            writer.writeRepeatedMessage(2, this.value, (item: EnumValueDescriptorProto) => item.serialize(writer));
        if (this.options !== undefined)
            writer.writeMessage(3, this.options, () => this.options.serialize(writer));
        if (this.reserved_range !== undefined)
            writer.writeRepeatedMessage(4, this.reserved_range, (item: EnumDescriptorProto.EnumReservedRange) => item.serialize(writer));
        if (this.reserved_name !== undefined)
            writer.writeRepeatedString(5, this.reserved_name);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumDescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumDescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.value, () => pb_1.Message.addToRepeatedWrapperField(message, 2, EnumValueDescriptorProto.deserialize(reader), EnumValueDescriptorProto));
                    break;
                case 3:
                    reader.readMessage(message.options, () => message.options = EnumOptions.deserialize(reader));
                    break;
                case 4:
                    reader.readMessage(message.reserved_range, () => pb_1.Message.addToRepeatedWrapperField(message, 4, EnumDescriptorProto.EnumReservedRange.deserialize(reader), EnumDescriptorProto.EnumReservedRange));
                    break;
                case 5:
                    pb_1.Message.addToRepeatedField(message, 5, reader.readString());
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EnumDescriptorProto {
        return EnumDescriptorProto.deserialize(bytes);
    }
}
export namespace EnumDescriptorProto {
    export class EnumReservedRange extends pb_1.Message {
        constructor(data?: any[] | {
            start?: number;
            end?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("start" in data && data.start != undefined) {
                    this.start = data.start;
                }
                if ("end" in data && data.end != undefined) {
                    this.end = data.end;
                }
            }
        }
        get start() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set start(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get end() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            var data: {
                start?: number;
                end?: number;
            } = {};
            if (this.start != null) {
                data.start = this.start;
            }
            if (this.end != null) {
                data.end = this.end;
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.start !== undefined)
                writer.writeInt32(1, this.start);
            if (this.end !== undefined)
                writer.writeInt32(2, this.end);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumReservedRange {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumReservedRange();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.start = reader.readInt32();
                        break;
                    case 2:
                        message.end = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EnumReservedRange {
            return EnumReservedRange.deserialize(bytes);
        }
    }
}
export class EnumValueDescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        number?: number;
        options?: EnumValueOptions;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("number" in data && data.number != undefined) {
                this.number = data.number;
            }
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get number() {
        return pb_1.Message.getField(this, 2) as number;
    }
    set number(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, EnumValueOptions, 3) as EnumValueOptions;
    }
    set options(value: EnumValueOptions) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        var data: {
            name?: string;
            number?: number;
            options?: ReturnType<typeof EnumValueOptions.prototype.toObject>;
        } = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.number != null) {
            data.number = this.number;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (this.number !== undefined)
            writer.writeInt32(2, this.number);
        if (this.options !== undefined)
            writer.writeMessage(3, this.options, () => this.options.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumValueDescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumValueDescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    message.number = reader.readInt32();
                    break;
                case 3:
                    reader.readMessage(message.options, () => message.options = EnumValueOptions.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EnumValueDescriptorProto {
        return EnumValueDescriptorProto.deserialize(bytes);
    }
}
export class ServiceDescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        method: MethodDescriptorProto[];
        options?: ServiceOptions;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            this.method = data.method;
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get method() {
        return pb_1.Message.getRepeatedWrapperField(this, MethodDescriptorProto, 2) as MethodDescriptorProto[];
    }
    set method(value: MethodDescriptorProto[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, ServiceOptions, 3) as ServiceOptions;
    }
    set options(value: ServiceOptions) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    toObject() {
        var data: {
            name?: string;
            method: ReturnType<typeof MethodDescriptorProto.prototype.toObject>[];
            options?: ReturnType<typeof ServiceOptions.prototype.toObject>;
        } = {
            method: this.method.map((item: MethodDescriptorProto) => item.toObject())
        };
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (this.method !== undefined)
            writer.writeRepeatedMessage(2, this.method, (item: MethodDescriptorProto) => item.serialize(writer));
        if (this.options !== undefined)
            writer.writeMessage(3, this.options, () => this.options.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ServiceDescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ServiceDescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.method, () => pb_1.Message.addToRepeatedWrapperField(message, 2, MethodDescriptorProto.deserialize(reader), MethodDescriptorProto));
                    break;
                case 3:
                    reader.readMessage(message.options, () => message.options = ServiceOptions.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ServiceDescriptorProto {
        return ServiceDescriptorProto.deserialize(bytes);
    }
}
export class MethodDescriptorProto extends pb_1.Message {
    constructor(data?: any[] | {
        name?: string;
        input_type?: string;
        output_type?: string;
        options?: MethodOptions;
        client_streaming?: boolean;
        server_streaming?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("name" in data && data.name != undefined) {
                this.name = data.name;
            }
            if ("input_type" in data && data.input_type != undefined) {
                this.input_type = data.input_type;
            }
            if ("output_type" in data && data.output_type != undefined) {
                this.output_type = data.output_type;
            }
            if ("options" in data && data.options != undefined) {
                this.options = data.options;
            }
            if ("client_streaming" in data && data.client_streaming != undefined) {
                this.client_streaming = data.client_streaming;
            }
            if ("server_streaming" in data && data.server_streaming != undefined) {
                this.server_streaming = data.server_streaming;
            }
        }
    }
    get name() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set name(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get input_type() {
        return pb_1.Message.getField(this, 2) as string;
    }
    set input_type(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get output_type() {
        return pb_1.Message.getField(this, 3) as string;
    }
    set output_type(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get options() {
        return pb_1.Message.getWrapperField(this, MethodOptions, 4) as MethodOptions;
    }
    set options(value: MethodOptions) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get client_streaming() {
        return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
    }
    set client_streaming(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get server_streaming() {
        return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
    }
    set server_streaming(value: boolean) {
        pb_1.Message.setField(this, 6, value);
    }
    toObject() {
        var data: {
            name?: string;
            input_type?: string;
            output_type?: string;
            options?: ReturnType<typeof MethodOptions.prototype.toObject>;
            client_streaming?: boolean;
            server_streaming?: boolean;
        } = {};
        if (this.name != null) {
            data.name = this.name;
        }
        if (this.input_type != null) {
            data.input_type = this.input_type;
        }
        if (this.output_type != null) {
            data.output_type = this.output_type;
        }
        if (this.options != null) {
            data.options = this.options.toObject();
        }
        if (this.client_streaming != null) {
            data.client_streaming = this.client_streaming;
        }
        if (this.server_streaming != null) {
            data.server_streaming = this.server_streaming;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.name === "string" && this.name.length)
            writer.writeString(1, this.name);
        if (typeof this.input_type === "string" && this.input_type.length)
            writer.writeString(2, this.input_type);
        if (typeof this.output_type === "string" && this.output_type.length)
            writer.writeString(3, this.output_type);
        if (this.options !== undefined)
            writer.writeMessage(4, this.options, () => this.options.serialize(writer));
        if (this.client_streaming !== undefined)
            writer.writeBool(5, this.client_streaming);
        if (this.server_streaming !== undefined)
            writer.writeBool(6, this.server_streaming);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MethodDescriptorProto {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MethodDescriptorProto();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.name = reader.readString();
                    break;
                case 2:
                    message.input_type = reader.readString();
                    break;
                case 3:
                    message.output_type = reader.readString();
                    break;
                case 4:
                    reader.readMessage(message.options, () => message.options = MethodOptions.deserialize(reader));
                    break;
                case 5:
                    message.client_streaming = reader.readBool();
                    break;
                case 6:
                    message.server_streaming = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MethodDescriptorProto {
        return MethodDescriptorProto.deserialize(bytes);
    }
}
export class FileOptions extends pb_1.Message {
    constructor(data?: any[] | {
        java_package?: string;
        java_outer_classname?: string;
        java_multiple_files?: boolean;
        java_generate_equals_and_hash?: boolean;
        java_string_check_utf8?: boolean;
        optimize_for?: FileOptions.OptimizeMode;
        go_package?: string;
        cc_generic_services?: boolean;
        java_generic_services?: boolean;
        py_generic_services?: boolean;
        php_generic_services?: boolean;
        deprecated?: boolean;
        cc_enable_arenas?: boolean;
        objc_class_prefix?: string;
        csharp_namespace?: string;
        swift_prefix?: string;
        php_class_prefix?: string;
        php_namespace?: string;
        php_metadata_namespace?: string;
        ruby_package?: string;
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("java_package" in data && data.java_package != undefined) {
                this.java_package = data.java_package;
            }
            if ("java_outer_classname" in data && data.java_outer_classname != undefined) {
                this.java_outer_classname = data.java_outer_classname;
            }
            if ("java_multiple_files" in data && data.java_multiple_files != undefined) {
                this.java_multiple_files = data.java_multiple_files;
            }
            if ("java_generate_equals_and_hash" in data && data.java_generate_equals_and_hash != undefined) {
                this.java_generate_equals_and_hash = data.java_generate_equals_and_hash;
            }
            if ("java_string_check_utf8" in data && data.java_string_check_utf8 != undefined) {
                this.java_string_check_utf8 = data.java_string_check_utf8;
            }
            if ("optimize_for" in data && data.optimize_for != undefined) {
                this.optimize_for = data.optimize_for;
            }
            if ("go_package" in data && data.go_package != undefined) {
                this.go_package = data.go_package;
            }
            if ("cc_generic_services" in data && data.cc_generic_services != undefined) {
                this.cc_generic_services = data.cc_generic_services;
            }
            if ("java_generic_services" in data && data.java_generic_services != undefined) {
                this.java_generic_services = data.java_generic_services;
            }
            if ("py_generic_services" in data && data.py_generic_services != undefined) {
                this.py_generic_services = data.py_generic_services;
            }
            if ("php_generic_services" in data && data.php_generic_services != undefined) {
                this.php_generic_services = data.php_generic_services;
            }
            if ("deprecated" in data && data.deprecated != undefined) {
                this.deprecated = data.deprecated;
            }
            if ("cc_enable_arenas" in data && data.cc_enable_arenas != undefined) {
                this.cc_enable_arenas = data.cc_enable_arenas;
            }
            if ("objc_class_prefix" in data && data.objc_class_prefix != undefined) {
                this.objc_class_prefix = data.objc_class_prefix;
            }
            if ("csharp_namespace" in data && data.csharp_namespace != undefined) {
                this.csharp_namespace = data.csharp_namespace;
            }
            if ("swift_prefix" in data && data.swift_prefix != undefined) {
                this.swift_prefix = data.swift_prefix;
            }
            if ("php_class_prefix" in data && data.php_class_prefix != undefined) {
                this.php_class_prefix = data.php_class_prefix;
            }
            if ("php_namespace" in data && data.php_namespace != undefined) {
                this.php_namespace = data.php_namespace;
            }
            if ("php_metadata_namespace" in data && data.php_metadata_namespace != undefined) {
                this.php_metadata_namespace = data.php_metadata_namespace;
            }
            if ("ruby_package" in data && data.ruby_package != undefined) {
                this.ruby_package = data.ruby_package;
            }
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get java_package() {
        return pb_1.Message.getField(this, 1) as string;
    }
    set java_package(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get java_outer_classname() {
        return pb_1.Message.getField(this, 8) as string;
    }
    set java_outer_classname(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get java_multiple_files() {
        return pb_1.Message.getFieldWithDefault(this, 10, false) as boolean;
    }
    set java_multiple_files(value: boolean) {
        pb_1.Message.setField(this, 10, value);
    }
    get java_generate_equals_and_hash() {
        return pb_1.Message.getField(this, 20) as boolean;
    }
    set java_generate_equals_and_hash(value: boolean) {
        pb_1.Message.setField(this, 20, value);
    }
    get java_string_check_utf8() {
        return pb_1.Message.getFieldWithDefault(this, 27, false) as boolean;
    }
    set java_string_check_utf8(value: boolean) {
        pb_1.Message.setField(this, 27, value);
    }
    get optimize_for() {
        return pb_1.Message.getFieldWithDefault(this, 9, FileOptions.OptimizeMode.SPEED) as FileOptions.OptimizeMode;
    }
    set optimize_for(value: FileOptions.OptimizeMode) {
        pb_1.Message.setField(this, 9, value);
    }
    get go_package() {
        return pb_1.Message.getField(this, 11) as string;
    }
    set go_package(value: string) {
        pb_1.Message.setField(this, 11, value);
    }
    get cc_generic_services() {
        return pb_1.Message.getFieldWithDefault(this, 16, false) as boolean;
    }
    set cc_generic_services(value: boolean) {
        pb_1.Message.setField(this, 16, value);
    }
    get java_generic_services() {
        return pb_1.Message.getFieldWithDefault(this, 17, false) as boolean;
    }
    set java_generic_services(value: boolean) {
        pb_1.Message.setField(this, 17, value);
    }
    get py_generic_services() {
        return pb_1.Message.getFieldWithDefault(this, 18, false) as boolean;
    }
    set py_generic_services(value: boolean) {
        pb_1.Message.setField(this, 18, value);
    }
    get php_generic_services() {
        return pb_1.Message.getFieldWithDefault(this, 42, false) as boolean;
    }
    set php_generic_services(value: boolean) {
        pb_1.Message.setField(this, 42, value);
    }
    get deprecated() {
        return pb_1.Message.getFieldWithDefault(this, 23, false) as boolean;
    }
    set deprecated(value: boolean) {
        pb_1.Message.setField(this, 23, value);
    }
    get cc_enable_arenas() {
        return pb_1.Message.getFieldWithDefault(this, 31, true) as boolean;
    }
    set cc_enable_arenas(value: boolean) {
        pb_1.Message.setField(this, 31, value);
    }
    get objc_class_prefix() {
        return pb_1.Message.getField(this, 36) as string;
    }
    set objc_class_prefix(value: string) {
        pb_1.Message.setField(this, 36, value);
    }
    get csharp_namespace() {
        return pb_1.Message.getField(this, 37) as string;
    }
    set csharp_namespace(value: string) {
        pb_1.Message.setField(this, 37, value);
    }
    get swift_prefix() {
        return pb_1.Message.getField(this, 39) as string;
    }
    set swift_prefix(value: string) {
        pb_1.Message.setField(this, 39, value);
    }
    get php_class_prefix() {
        return pb_1.Message.getField(this, 40) as string;
    }
    set php_class_prefix(value: string) {
        pb_1.Message.setField(this, 40, value);
    }
    get php_namespace() {
        return pb_1.Message.getField(this, 41) as string;
    }
    set php_namespace(value: string) {
        pb_1.Message.setField(this, 41, value);
    }
    get php_metadata_namespace() {
        return pb_1.Message.getField(this, 44) as string;
    }
    set php_metadata_namespace(value: string) {
        pb_1.Message.setField(this, 44, value);
    }
    get ruby_package() {
        return pb_1.Message.getField(this, 45) as string;
    }
    set ruby_package(value: string) {
        pb_1.Message.setField(this, 45, value);
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            java_package?: string;
            java_outer_classname?: string;
            java_multiple_files?: boolean;
            java_generate_equals_and_hash?: boolean;
            java_string_check_utf8?: boolean;
            optimize_for?: FileOptions.OptimizeMode;
            go_package?: string;
            cc_generic_services?: boolean;
            java_generic_services?: boolean;
            py_generic_services?: boolean;
            php_generic_services?: boolean;
            deprecated?: boolean;
            cc_enable_arenas?: boolean;
            objc_class_prefix?: string;
            csharp_namespace?: string;
            swift_prefix?: string;
            php_class_prefix?: string;
            php_namespace?: string;
            php_metadata_namespace?: string;
            ruby_package?: string;
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        if (this.java_package != null) {
            data.java_package = this.java_package;
        }
        if (this.java_outer_classname != null) {
            data.java_outer_classname = this.java_outer_classname;
        }
        if (this.java_multiple_files != null) {
            data.java_multiple_files = this.java_multiple_files;
        }
        if (this.java_generate_equals_and_hash != null) {
            data.java_generate_equals_and_hash = this.java_generate_equals_and_hash;
        }
        if (this.java_string_check_utf8 != null) {
            data.java_string_check_utf8 = this.java_string_check_utf8;
        }
        if (this.optimize_for != null) {
            data.optimize_for = this.optimize_for;
        }
        if (this.go_package != null) {
            data.go_package = this.go_package;
        }
        if (this.cc_generic_services != null) {
            data.cc_generic_services = this.cc_generic_services;
        }
        if (this.java_generic_services != null) {
            data.java_generic_services = this.java_generic_services;
        }
        if (this.py_generic_services != null) {
            data.py_generic_services = this.py_generic_services;
        }
        if (this.php_generic_services != null) {
            data.php_generic_services = this.php_generic_services;
        }
        if (this.deprecated != null) {
            data.deprecated = this.deprecated;
        }
        if (this.cc_enable_arenas != null) {
            data.cc_enable_arenas = this.cc_enable_arenas;
        }
        if (this.objc_class_prefix != null) {
            data.objc_class_prefix = this.objc_class_prefix;
        }
        if (this.csharp_namespace != null) {
            data.csharp_namespace = this.csharp_namespace;
        }
        if (this.swift_prefix != null) {
            data.swift_prefix = this.swift_prefix;
        }
        if (this.php_class_prefix != null) {
            data.php_class_prefix = this.php_class_prefix;
        }
        if (this.php_namespace != null) {
            data.php_namespace = this.php_namespace;
        }
        if (this.php_metadata_namespace != null) {
            data.php_metadata_namespace = this.php_metadata_namespace;
        }
        if (this.ruby_package != null) {
            data.ruby_package = this.ruby_package;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (typeof this.java_package === "string" && this.java_package.length)
            writer.writeString(1, this.java_package);
        if (typeof this.java_outer_classname === "string" && this.java_outer_classname.length)
            writer.writeString(8, this.java_outer_classname);
        if (this.java_multiple_files !== undefined)
            writer.writeBool(10, this.java_multiple_files);
        if (this.java_generate_equals_and_hash !== undefined)
            writer.writeBool(20, this.java_generate_equals_and_hash);
        if (this.java_string_check_utf8 !== undefined)
            writer.writeBool(27, this.java_string_check_utf8);
        if (this.optimize_for !== undefined)
            writer.writeEnum(9, this.optimize_for);
        if (typeof this.go_package === "string" && this.go_package.length)
            writer.writeString(11, this.go_package);
        if (this.cc_generic_services !== undefined)
            writer.writeBool(16, this.cc_generic_services);
        if (this.java_generic_services !== undefined)
            writer.writeBool(17, this.java_generic_services);
        if (this.py_generic_services !== undefined)
            writer.writeBool(18, this.py_generic_services);
        if (this.php_generic_services !== undefined)
            writer.writeBool(42, this.php_generic_services);
        if (this.deprecated !== undefined)
            writer.writeBool(23, this.deprecated);
        if (this.cc_enable_arenas !== undefined)
            writer.writeBool(31, this.cc_enable_arenas);
        if (typeof this.objc_class_prefix === "string" && this.objc_class_prefix.length)
            writer.writeString(36, this.objc_class_prefix);
        if (typeof this.csharp_namespace === "string" && this.csharp_namespace.length)
            writer.writeString(37, this.csharp_namespace);
        if (typeof this.swift_prefix === "string" && this.swift_prefix.length)
            writer.writeString(39, this.swift_prefix);
        if (typeof this.php_class_prefix === "string" && this.php_class_prefix.length)
            writer.writeString(40, this.php_class_prefix);
        if (typeof this.php_namespace === "string" && this.php_namespace.length)
            writer.writeString(41, this.php_namespace);
        if (typeof this.php_metadata_namespace === "string" && this.php_metadata_namespace.length)
            writer.writeString(44, this.php_metadata_namespace);
        if (typeof this.ruby_package === "string" && this.ruby_package.length)
            writer.writeString(45, this.ruby_package);
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FileOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FileOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.java_package = reader.readString();
                    break;
                case 8:
                    message.java_outer_classname = reader.readString();
                    break;
                case 10:
                    message.java_multiple_files = reader.readBool();
                    break;
                case 20:
                    message.java_generate_equals_and_hash = reader.readBool();
                    break;
                case 27:
                    message.java_string_check_utf8 = reader.readBool();
                    break;
                case 9:
                    message.optimize_for = reader.readEnum();
                    break;
                case 11:
                    message.go_package = reader.readString();
                    break;
                case 16:
                    message.cc_generic_services = reader.readBool();
                    break;
                case 17:
                    message.java_generic_services = reader.readBool();
                    break;
                case 18:
                    message.py_generic_services = reader.readBool();
                    break;
                case 42:
                    message.php_generic_services = reader.readBool();
                    break;
                case 23:
                    message.deprecated = reader.readBool();
                    break;
                case 31:
                    message.cc_enable_arenas = reader.readBool();
                    break;
                case 36:
                    message.objc_class_prefix = reader.readString();
                    break;
                case 37:
                    message.csharp_namespace = reader.readString();
                    break;
                case 39:
                    message.swift_prefix = reader.readString();
                    break;
                case 40:
                    message.php_class_prefix = reader.readString();
                    break;
                case 41:
                    message.php_namespace = reader.readString();
                    break;
                case 44:
                    message.php_metadata_namespace = reader.readString();
                    break;
                case 45:
                    message.ruby_package = reader.readString();
                    break;
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FileOptions {
        return FileOptions.deserialize(bytes);
    }
}
export namespace FileOptions {
    export enum OptimizeMode {
        SPEED = 1,
        CODE_SIZE = 2,
        LITE_RUNTIME = 3
    }
}
export class MessageOptions extends pb_1.Message {
    constructor(data?: any[] | {
        message_set_wire_format?: boolean;
        no_standard_descriptor_accessor?: boolean;
        deprecated?: boolean;
        map_entry?: boolean;
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("message_set_wire_format" in data && data.message_set_wire_format != undefined) {
                this.message_set_wire_format = data.message_set_wire_format;
            }
            if ("no_standard_descriptor_accessor" in data && data.no_standard_descriptor_accessor != undefined) {
                this.no_standard_descriptor_accessor = data.no_standard_descriptor_accessor;
            }
            if ("deprecated" in data && data.deprecated != undefined) {
                this.deprecated = data.deprecated;
            }
            if ("map_entry" in data && data.map_entry != undefined) {
                this.map_entry = data.map_entry;
            }
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get message_set_wire_format() {
        return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
    }
    set message_set_wire_format(value: boolean) {
        pb_1.Message.setField(this, 1, value);
    }
    get no_standard_descriptor_accessor() {
        return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
    }
    set no_standard_descriptor_accessor(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get deprecated() {
        return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
    }
    set deprecated(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get map_entry() {
        return pb_1.Message.getField(this, 7) as boolean;
    }
    set map_entry(value: boolean) {
        pb_1.Message.setField(this, 7, value);
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            message_set_wire_format?: boolean;
            no_standard_descriptor_accessor?: boolean;
            deprecated?: boolean;
            map_entry?: boolean;
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        if (this.message_set_wire_format != null) {
            data.message_set_wire_format = this.message_set_wire_format;
        }
        if (this.no_standard_descriptor_accessor != null) {
            data.no_standard_descriptor_accessor = this.no_standard_descriptor_accessor;
        }
        if (this.deprecated != null) {
            data.deprecated = this.deprecated;
        }
        if (this.map_entry != null) {
            data.map_entry = this.map_entry;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.message_set_wire_format !== undefined)
            writer.writeBool(1, this.message_set_wire_format);
        if (this.no_standard_descriptor_accessor !== undefined)
            writer.writeBool(2, this.no_standard_descriptor_accessor);
        if (this.deprecated !== undefined)
            writer.writeBool(3, this.deprecated);
        if (this.map_entry !== undefined)
            writer.writeBool(7, this.map_entry);
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MessageOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MessageOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.message_set_wire_format = reader.readBool();
                    break;
                case 2:
                    message.no_standard_descriptor_accessor = reader.readBool();
                    break;
                case 3:
                    message.deprecated = reader.readBool();
                    break;
                case 7:
                    message.map_entry = reader.readBool();
                    break;
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MessageOptions {
        return MessageOptions.deserialize(bytes);
    }
}
export class FieldOptions extends pb_1.Message {
    constructor(data?: any[] | {
        ctype?: FieldOptions.CType;
        packed?: boolean;
        jstype?: FieldOptions.JSType;
        lazy?: boolean;
        deprecated?: boolean;
        weak?: boolean;
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("ctype" in data && data.ctype != undefined) {
                this.ctype = data.ctype;
            }
            if ("packed" in data && data.packed != undefined) {
                this.packed = data.packed;
            }
            if ("jstype" in data && data.jstype != undefined) {
                this.jstype = data.jstype;
            }
            if ("lazy" in data && data.lazy != undefined) {
                this.lazy = data.lazy;
            }
            if ("deprecated" in data && data.deprecated != undefined) {
                this.deprecated = data.deprecated;
            }
            if ("weak" in data && data.weak != undefined) {
                this.weak = data.weak;
            }
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get ctype() {
        return pb_1.Message.getFieldWithDefault(this, 1, FieldOptions.CType.STRING) as FieldOptions.CType;
    }
    set ctype(value: FieldOptions.CType) {
        pb_1.Message.setField(this, 1, value);
    }
    get packed() {
        return pb_1.Message.getField(this, 2) as boolean;
    }
    set packed(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get jstype() {
        return pb_1.Message.getFieldWithDefault(this, 6, FieldOptions.JSType.JS_NORMAL) as FieldOptions.JSType;
    }
    set jstype(value: FieldOptions.JSType) {
        pb_1.Message.setField(this, 6, value);
    }
    get lazy() {
        return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
    }
    set lazy(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get deprecated() {
        return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
    }
    set deprecated(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get weak() {
        return pb_1.Message.getFieldWithDefault(this, 10, false) as boolean;
    }
    set weak(value: boolean) {
        pb_1.Message.setField(this, 10, value);
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            ctype?: FieldOptions.CType;
            packed?: boolean;
            jstype?: FieldOptions.JSType;
            lazy?: boolean;
            deprecated?: boolean;
            weak?: boolean;
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        if (this.ctype != null) {
            data.ctype = this.ctype;
        }
        if (this.packed != null) {
            data.packed = this.packed;
        }
        if (this.jstype != null) {
            data.jstype = this.jstype;
        }
        if (this.lazy != null) {
            data.lazy = this.lazy;
        }
        if (this.deprecated != null) {
            data.deprecated = this.deprecated;
        }
        if (this.weak != null) {
            data.weak = this.weak;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.ctype !== undefined)
            writer.writeEnum(1, this.ctype);
        if (this.packed !== undefined)
            writer.writeBool(2, this.packed);
        if (this.jstype !== undefined)
            writer.writeEnum(6, this.jstype);
        if (this.lazy !== undefined)
            writer.writeBool(5, this.lazy);
        if (this.deprecated !== undefined)
            writer.writeBool(3, this.deprecated);
        if (this.weak !== undefined)
            writer.writeBool(10, this.weak);
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FieldOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new FieldOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.ctype = reader.readEnum();
                    break;
                case 2:
                    message.packed = reader.readBool();
                    break;
                case 6:
                    message.jstype = reader.readEnum();
                    break;
                case 5:
                    message.lazy = reader.readBool();
                    break;
                case 3:
                    message.deprecated = reader.readBool();
                    break;
                case 10:
                    message.weak = reader.readBool();
                    break;
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FieldOptions {
        return FieldOptions.deserialize(bytes);
    }
}
export namespace FieldOptions {
    export enum CType {
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2
    }
    export enum JSType {
        JS_NORMAL = 0,
        JS_STRING = 1,
        JS_NUMBER = 2
    }
}
export class OneofOptions extends pb_1.Message {
    constructor(data?: any[] | {
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OneofOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new OneofOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): OneofOptions {
        return OneofOptions.deserialize(bytes);
    }
}
export class EnumOptions extends pb_1.Message {
    constructor(data?: any[] | {
        allow_alias?: boolean;
        deprecated?: boolean;
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("allow_alias" in data && data.allow_alias != undefined) {
                this.allow_alias = data.allow_alias;
            }
            if ("deprecated" in data && data.deprecated != undefined) {
                this.deprecated = data.deprecated;
            }
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get allow_alias() {
        return pb_1.Message.getField(this, 2) as boolean;
    }
    set allow_alias(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get deprecated() {
        return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
    }
    set deprecated(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            allow_alias?: boolean;
            deprecated?: boolean;
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        if (this.allow_alias != null) {
            data.allow_alias = this.allow_alias;
        }
        if (this.deprecated != null) {
            data.deprecated = this.deprecated;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.allow_alias !== undefined)
            writer.writeBool(2, this.allow_alias);
        if (this.deprecated !== undefined)
            writer.writeBool(3, this.deprecated);
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.allow_alias = reader.readBool();
                    break;
                case 3:
                    message.deprecated = reader.readBool();
                    break;
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EnumOptions {
        return EnumOptions.deserialize(bytes);
    }
}
export class EnumValueOptions extends pb_1.Message {
    constructor(data?: any[] | {
        deprecated?: boolean;
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("deprecated" in data && data.deprecated != undefined) {
                this.deprecated = data.deprecated;
            }
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get deprecated() {
        return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
    }
    set deprecated(value: boolean) {
        pb_1.Message.setField(this, 1, value);
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            deprecated?: boolean;
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        if (this.deprecated != null) {
            data.deprecated = this.deprecated;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.deprecated !== undefined)
            writer.writeBool(1, this.deprecated);
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnumValueOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EnumValueOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.deprecated = reader.readBool();
                    break;
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EnumValueOptions {
        return EnumValueOptions.deserialize(bytes);
    }
}
export class ServiceOptions extends pb_1.Message {
    constructor(data?: any[] | {
        deprecated?: boolean;
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("deprecated" in data && data.deprecated != undefined) {
                this.deprecated = data.deprecated;
            }
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get deprecated() {
        return pb_1.Message.getFieldWithDefault(this, 33, false) as boolean;
    }
    set deprecated(value: boolean) {
        pb_1.Message.setField(this, 33, value);
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            deprecated?: boolean;
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        if (this.deprecated != null) {
            data.deprecated = this.deprecated;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.deprecated !== undefined)
            writer.writeBool(33, this.deprecated);
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ServiceOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ServiceOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 33:
                    message.deprecated = reader.readBool();
                    break;
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ServiceOptions {
        return ServiceOptions.deserialize(bytes);
    }
}
export class MethodOptions extends pb_1.Message {
    constructor(data?: any[] | {
        deprecated?: boolean;
        idempotency_level?: MethodOptions.IdempotencyLevel;
        uninterpreted_option: UninterpretedOption[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [999], []);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("deprecated" in data && data.deprecated != undefined) {
                this.deprecated = data.deprecated;
            }
            if ("idempotency_level" in data && data.idempotency_level != undefined) {
                this.idempotency_level = data.idempotency_level;
            }
            this.uninterpreted_option = data.uninterpreted_option;
        }
    }
    get deprecated() {
        return pb_1.Message.getFieldWithDefault(this, 33, false) as boolean;
    }
    set deprecated(value: boolean) {
        pb_1.Message.setField(this, 33, value);
    }
    get idempotency_level() {
        return pb_1.Message.getFieldWithDefault(this, 34, MethodOptions.IdempotencyLevel.IDEMPOTENCY_UNKNOWN) as MethodOptions.IdempotencyLevel;
    }
    set idempotency_level(value: MethodOptions.IdempotencyLevel) {
        pb_1.Message.setField(this, 34, value);
    }
    get uninterpreted_option() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption, 999) as UninterpretedOption[];
    }
    set uninterpreted_option(value: UninterpretedOption[]) {
        pb_1.Message.setRepeatedWrapperField(this, 999, value);
    }
    toObject() {
        var data: {
            deprecated?: boolean;
            idempotency_level?: MethodOptions.IdempotencyLevel;
            uninterpreted_option: ReturnType<typeof UninterpretedOption.prototype.toObject>[];
        } = {
            uninterpreted_option: this.uninterpreted_option.map((item: UninterpretedOption) => item.toObject())
        };
        if (this.deprecated != null) {
            data.deprecated = this.deprecated;
        }
        if (this.idempotency_level != null) {
            data.idempotency_level = this.idempotency_level;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.deprecated !== undefined)
            writer.writeBool(33, this.deprecated);
        if (this.idempotency_level !== undefined)
            writer.writeEnum(34, this.idempotency_level);
        if (this.uninterpreted_option !== undefined)
            writer.writeRepeatedMessage(999, this.uninterpreted_option, (item: UninterpretedOption) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MethodOptions {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MethodOptions();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 33:
                    message.deprecated = reader.readBool();
                    break;
                case 34:
                    message.idempotency_level = reader.readEnum();
                    break;
                case 999:
                    reader.readMessage(message.uninterpreted_option, () => pb_1.Message.addToRepeatedWrapperField(message, 999, UninterpretedOption.deserialize(reader), UninterpretedOption));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MethodOptions {
        return MethodOptions.deserialize(bytes);
    }
}
export namespace MethodOptions {
    export enum IdempotencyLevel {
        IDEMPOTENCY_UNKNOWN = 0,
        NO_SIDE_EFFECTS = 1,
        IDEMPOTENT = 2
    }
}
export class UninterpretedOption extends pb_1.Message {
    constructor(data?: any[] | {
        name: UninterpretedOption.NamePart[];
        identifier_value?: string;
        positive_int_value?: number;
        negative_int_value?: number;
        double_value?: number;
        string_value?: Uint8Array;
        aggregate_value?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.name = data.name;
            if ("identifier_value" in data && data.identifier_value != undefined) {
                this.identifier_value = data.identifier_value;
            }
            if ("positive_int_value" in data && data.positive_int_value != undefined) {
                this.positive_int_value = data.positive_int_value;
            }
            if ("negative_int_value" in data && data.negative_int_value != undefined) {
                this.negative_int_value = data.negative_int_value;
            }
            if ("double_value" in data && data.double_value != undefined) {
                this.double_value = data.double_value;
            }
            if ("string_value" in data && data.string_value != undefined) {
                this.string_value = data.string_value;
            }
            if ("aggregate_value" in data && data.aggregate_value != undefined) {
                this.aggregate_value = data.aggregate_value;
            }
        }
    }
    get name() {
        return pb_1.Message.getRepeatedWrapperField(this, UninterpretedOption.NamePart, 2) as UninterpretedOption.NamePart[];
    }
    set name(value: UninterpretedOption.NamePart[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get identifier_value() {
        return pb_1.Message.getField(this, 3) as string;
    }
    set identifier_value(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get positive_int_value() {
        return pb_1.Message.getField(this, 4) as number;
    }
    set positive_int_value(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get negative_int_value() {
        return pb_1.Message.getField(this, 5) as number;
    }
    set negative_int_value(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get double_value() {
        return pb_1.Message.getField(this, 6) as number;
    }
    set double_value(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get string_value() {
        return pb_1.Message.getField(this, 7) as Uint8Array;
    }
    set string_value(value: Uint8Array) {
        pb_1.Message.setField(this, 7, value);
    }
    get aggregate_value() {
        return pb_1.Message.getField(this, 8) as string;
    }
    set aggregate_value(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    toObject() {
        var data: {
            name: ReturnType<typeof UninterpretedOption.NamePart.prototype.toObject>[];
            identifier_value?: string;
            positive_int_value?: number;
            negative_int_value?: number;
            double_value?: number;
            string_value?: Uint8Array;
            aggregate_value?: string;
        } = {
            name: this.name.map((item: UninterpretedOption.NamePart) => item.toObject())
        };
        if (this.identifier_value != null) {
            data.identifier_value = this.identifier_value;
        }
        if (this.positive_int_value != null) {
            data.positive_int_value = this.positive_int_value;
        }
        if (this.negative_int_value != null) {
            data.negative_int_value = this.negative_int_value;
        }
        if (this.double_value != null) {
            data.double_value = this.double_value;
        }
        if (this.string_value != null) {
            data.string_value = this.string_value;
        }
        if (this.aggregate_value != null) {
            data.aggregate_value = this.aggregate_value;
        }
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.name !== undefined)
            writer.writeRepeatedMessage(2, this.name, (item: UninterpretedOption.NamePart) => item.serialize(writer));
        if (typeof this.identifier_value === "string" && this.identifier_value.length)
            writer.writeString(3, this.identifier_value);
        if (this.positive_int_value !== undefined)
            writer.writeUint64(4, this.positive_int_value);
        if (this.negative_int_value !== undefined)
            writer.writeInt64(5, this.negative_int_value);
        if (this.double_value !== undefined)
            writer.writeDouble(6, this.double_value);
        if (this.string_value !== undefined)
            writer.writeBytes(7, this.string_value);
        if (typeof this.aggregate_value === "string" && this.aggregate_value.length)
            writer.writeString(8, this.aggregate_value);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UninterpretedOption {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UninterpretedOption();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    reader.readMessage(message.name, () => pb_1.Message.addToRepeatedWrapperField(message, 2, UninterpretedOption.NamePart.deserialize(reader), UninterpretedOption.NamePart));
                    break;
                case 3:
                    message.identifier_value = reader.readString();
                    break;
                case 4:
                    message.positive_int_value = reader.readUint64();
                    break;
                case 5:
                    message.negative_int_value = reader.readInt64();
                    break;
                case 6:
                    message.double_value = reader.readDouble();
                    break;
                case 7:
                    message.string_value = reader.readBytes();
                    break;
                case 8:
                    message.aggregate_value = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): UninterpretedOption {
        return UninterpretedOption.deserialize(bytes);
    }
}
export namespace UninterpretedOption {
    export class NamePart extends pb_1.Message {
        constructor(data?: any[] | {
            name_part: string;
            is_extension: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                this.name_part = data.name_part;
                this.is_extension = data.is_extension;
            }
        }
        get name_part() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set name_part(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get is_extension() {
            return pb_1.Message.getField(this, 2) as boolean;
        }
        set is_extension(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            var data: {
                name_part: string;
                is_extension: boolean;
            } = {
                name_part: this.name_part,
                is_extension: this.is_extension
            };
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.name_part === "string" && this.name_part.length)
                writer.writeString(1, this.name_part);
            if (this.is_extension !== undefined)
                writer.writeBool(2, this.is_extension);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NamePart {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new NamePart();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name_part = reader.readString();
                        break;
                    case 2:
                        message.is_extension = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NamePart {
            return NamePart.deserialize(bytes);
        }
    }
}
export class SourceCodeInfo extends pb_1.Message {
    constructor(data?: any[] | {
        location: SourceCodeInfo.Location[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.location = data.location;
        }
    }
    get location() {
        return pb_1.Message.getRepeatedWrapperField(this, SourceCodeInfo.Location, 1) as SourceCodeInfo.Location[];
    }
    set location(value: SourceCodeInfo.Location[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        var data: {
            location: ReturnType<typeof SourceCodeInfo.Location.prototype.toObject>[];
        } = {
            location: this.location.map((item: SourceCodeInfo.Location) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.location !== undefined)
            writer.writeRepeatedMessage(1, this.location, (item: SourceCodeInfo.Location) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SourceCodeInfo {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new SourceCodeInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.location, () => pb_1.Message.addToRepeatedWrapperField(message, 1, SourceCodeInfo.Location.deserialize(reader), SourceCodeInfo.Location));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SourceCodeInfo {
        return SourceCodeInfo.deserialize(bytes);
    }
}
export namespace SourceCodeInfo {
    export class Location extends pb_1.Message {
        constructor(data?: any[] | {
            path: number[];
            span: number[];
            leading_comments?: string;
            trailing_comments?: string;
            leading_detached_comments: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 6], []);
            if (!Array.isArray(data) && typeof data == "object") {
                this.path = data.path;
                this.span = data.span;
                if ("leading_comments" in data && data.leading_comments != undefined) {
                    this.leading_comments = data.leading_comments;
                }
                if ("trailing_comments" in data && data.trailing_comments != undefined) {
                    this.trailing_comments = data.trailing_comments;
                }
                this.leading_detached_comments = data.leading_detached_comments;
            }
        }
        get path() {
            return pb_1.Message.getField(this, 1) as number[];
        }
        set path(value: number[]) {
            pb_1.Message.setField(this, 1, value);
        }
        get span() {
            return pb_1.Message.getField(this, 2) as number[];
        }
        set span(value: number[]) {
            pb_1.Message.setField(this, 2, value);
        }
        get leading_comments() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set leading_comments(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get trailing_comments() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set trailing_comments(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get leading_detached_comments() {
            return pb_1.Message.getField(this, 6) as string[];
        }
        set leading_detached_comments(value: string[]) {
            pb_1.Message.setField(this, 6, value);
        }
        toObject() {
            var data: {
                path: number[];
                span: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments: string[];
            } = {
                path: this.path,
                span: this.span,
                leading_detached_comments: this.leading_detached_comments
            };
            if (this.leading_comments != null) {
                data.leading_comments = this.leading_comments;
            }
            if (this.trailing_comments != null) {
                data.trailing_comments = this.trailing_comments;
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.path !== undefined)
                writer.writePackedInt32(1, this.path);
            if (this.span !== undefined)
                writer.writePackedInt32(2, this.span);
            if (typeof this.leading_comments === "string" && this.leading_comments.length)
                writer.writeString(3, this.leading_comments);
            if (typeof this.trailing_comments === "string" && this.trailing_comments.length)
                writer.writeString(4, this.trailing_comments);
            if (this.leading_detached_comments !== undefined)
                writer.writeRepeatedString(6, this.leading_detached_comments);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Location {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Location();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.path = reader.readPackedInt32();
                        break;
                    case 2:
                        message.span = reader.readPackedInt32();
                        break;
                    case 3:
                        message.leading_comments = reader.readString();
                        break;
                    case 4:
                        message.trailing_comments = reader.readString();
                        break;
                    case 6:
                        pb_1.Message.addToRepeatedField(message, 6, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Location {
            return Location.deserialize(bytes);
        }
    }
}
export class GeneratedCodeInfo extends pb_1.Message {
    constructor(data?: any[] | {
        annotation: GeneratedCodeInfo.Annotation[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
        if (!Array.isArray(data) && typeof data == "object") {
            this.annotation = data.annotation;
        }
    }
    get annotation() {
        return pb_1.Message.getRepeatedWrapperField(this, GeneratedCodeInfo.Annotation, 1) as GeneratedCodeInfo.Annotation[];
    }
    set annotation(value: GeneratedCodeInfo.Annotation[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    toObject() {
        var data: {
            annotation: ReturnType<typeof GeneratedCodeInfo.Annotation.prototype.toObject>[];
        } = {
            annotation: this.annotation.map((item: GeneratedCodeInfo.Annotation) => item.toObject())
        };
        return data;
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.annotation !== undefined)
            writer.writeRepeatedMessage(1, this.annotation, (item: GeneratedCodeInfo.Annotation) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GeneratedCodeInfo {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GeneratedCodeInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.annotation, () => pb_1.Message.addToRepeatedWrapperField(message, 1, GeneratedCodeInfo.Annotation.deserialize(reader), GeneratedCodeInfo.Annotation));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GeneratedCodeInfo {
        return GeneratedCodeInfo.deserialize(bytes);
    }
}
export namespace GeneratedCodeInfo {
    export class Annotation extends pb_1.Message {
        constructor(data?: any[] | {
            path: number[];
            source_file?: string;
            begin?: number;
            end?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                this.path = data.path;
                if ("source_file" in data && data.source_file != undefined) {
                    this.source_file = data.source_file;
                }
                if ("begin" in data && data.begin != undefined) {
                    this.begin = data.begin;
                }
                if ("end" in data && data.end != undefined) {
                    this.end = data.end;
                }
            }
        }
        get path() {
            return pb_1.Message.getField(this, 1) as number[];
        }
        set path(value: number[]) {
            pb_1.Message.setField(this, 1, value);
        }
        get source_file() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set source_file(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get begin() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set begin(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get end() {
            return pb_1.Message.getField(this, 4) as number;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        toObject() {
            var data: {
                path: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            } = {
                path: this.path
            };
            if (this.source_file != null) {
                data.source_file = this.source_file;
            }
            if (this.begin != null) {
                data.begin = this.begin;
            }
            if (this.end != null) {
                data.end = this.end;
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.path !== undefined)
                writer.writePackedInt32(1, this.path);
            if (typeof this.source_file === "string" && this.source_file.length)
                writer.writeString(2, this.source_file);
            if (this.begin !== undefined)
                writer.writeInt32(3, this.begin);
            if (this.end !== undefined)
                writer.writeInt32(4, this.end);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Annotation {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Annotation();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.path = reader.readPackedInt32();
                        break;
                    case 2:
                        message.source_file = reader.readString();
                        break;
                    case 3:
                        message.begin = reader.readInt32();
                        break;
                    case 4:
                        message.end = reader.readInt32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Annotation {
            return Annotation.deserialize(bytes);
        }
    }
}
