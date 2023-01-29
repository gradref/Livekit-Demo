import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "livekit";
export declare enum EncodedFileType {
    /** DEFAULT_FILETYPE - file type chosen based on codecs */
    DEFAULT_FILETYPE = 0,
    MP4 = 1,
    OGG = 2,
    UNRECOGNIZED = -1
}
export declare function encodedFileTypeFromJSON(object: any): EncodedFileType;
export declare function encodedFileTypeToJSON(object: EncodedFileType): string;
export declare enum StreamProtocol {
    /** DEFAULT_PROTOCOL - protocol chosen based on urls */
    DEFAULT_PROTOCOL = 0,
    RTMP = 1,
    UNRECOGNIZED = -1
}
export declare function streamProtocolFromJSON(object: any): StreamProtocol;
export declare function streamProtocolToJSON(object: StreamProtocol): string;
export declare enum SegmentedFileProtocol {
    DEFAULT_SEGMENTED_FILE_PROTOCOL = 0,
    HLS_PROTOCOL = 1,
    UNRECOGNIZED = -1
}
export declare function segmentedFileProtocolFromJSON(object: any): SegmentedFileProtocol;
export declare function segmentedFileProtocolToJSON(object: SegmentedFileProtocol): string;
export declare enum AudioCodec {
    DEFAULT_AC = 0,
    OPUS = 1,
    AAC = 2,
    UNRECOGNIZED = -1
}
export declare function audioCodecFromJSON(object: any): AudioCodec;
export declare function audioCodecToJSON(object: AudioCodec): string;
export declare enum VideoCodec {
    DEFAULT_VC = 0,
    H264_BASELINE = 1,
    H264_MAIN = 2,
    H264_HIGH = 3,
    UNRECOGNIZED = -1
}
export declare function videoCodecFromJSON(object: any): VideoCodec;
export declare function videoCodecToJSON(object: VideoCodec): string;
export declare enum EncodingOptionsPreset {
    /** H264_720P_30 - 1280x720, 30fps, 3000kpbs, H.264_MAIN / OPUS */
    H264_720P_30 = 0,
    /** H264_720P_60 - 1280x720, 60fps, 4500kbps, H.264_MAIN / OPUS */
    H264_720P_60 = 1,
    /** H264_1080P_30 - 1920x1080, 30fps, 4500kbps, H.264_MAIN / OPUS */
    H264_1080P_30 = 2,
    /** H264_1080P_60 - 1920x1080, 60fps, 6000kbps, H.264_MAIN / OPUS */
    H264_1080P_60 = 3,
    /** PORTRAIT_H264_720P_30 - 720x1280, 30fps, 3000kpbs, H.264_MAIN / OPUS */
    PORTRAIT_H264_720P_30 = 4,
    /** PORTRAIT_H264_720P_60 - 720x1280, 60fps, 4500kbps, H.264_MAIN / OPUS */
    PORTRAIT_H264_720P_60 = 5,
    /** PORTRAIT_H264_1080P_30 - 1080x1920, 30fps, 4500kbps, H.264_MAIN / OPUS */
    PORTRAIT_H264_1080P_30 = 6,
    /** PORTRAIT_H264_1080P_60 - 1080x1920, 60fps, 6000kbps, H.264_MAIN / OPUS */
    PORTRAIT_H264_1080P_60 = 7,
    UNRECOGNIZED = -1
}
export declare function encodingOptionsPresetFromJSON(object: any): EncodingOptionsPreset;
export declare function encodingOptionsPresetToJSON(object: EncodingOptionsPreset): string;
export declare enum EgressStatus {
    EGRESS_STARTING = 0,
    EGRESS_ACTIVE = 1,
    EGRESS_ENDING = 2,
    EGRESS_COMPLETE = 3,
    EGRESS_FAILED = 4,
    EGRESS_ABORTED = 5,
    EGRESS_LIMIT_REACHED = 6,
    UNRECOGNIZED = -1
}
export declare function egressStatusFromJSON(object: any): EgressStatus;
export declare function egressStatusToJSON(object: EgressStatus): string;
/** composite using a web browser */
export interface RoomCompositeEgressRequest {
    /** required */
    roomName?: string;
    /** (optional) */
    layout?: string;
    /** (default false) */
    audioOnly?: boolean;
    /** (default false) */
    videoOnly?: boolean;
    /** template base url (default https://recorder.livekit.io) */
    customBaseUrl?: string;
    file?: EncodedFileOutput | undefined;
    stream?: StreamOutput | undefined;
    segments?: SegmentedFileOutput | undefined;
    /** (default H264_720P_30) */
    preset?: EncodingOptionsPreset | undefined;
    /** (optional) */
    advanced?: EncodingOptions | undefined;
}
/** containerize up to one audio and one video track */
export interface TrackCompositeEgressRequest {
    /** required */
    roomName?: string;
    /** (optional) */
    audioTrackId?: string;
    /** (optional) */
    videoTrackId?: string;
    file?: EncodedFileOutput | undefined;
    stream?: StreamOutput | undefined;
    segments?: SegmentedFileOutput | undefined;
    /** (default H264_720P_30) */
    preset?: EncodingOptionsPreset | undefined;
    /** (optional) */
    advanced?: EncodingOptions | undefined;
}
/** record tracks individually, without transcoding */
export interface TrackEgressRequest {
    /** required */
    roomName?: string;
    /** required */
    trackId?: string;
    file?: DirectFileOutput | undefined;
    websocketUrl?: string | undefined;
}
/** record any website */
export interface WebEgressRequest {
    url?: string;
    audioOnly?: boolean;
    videoOnly?: boolean;
    file?: EncodedFileOutput | undefined;
    stream?: StreamOutput | undefined;
    segments?: SegmentedFileOutput | undefined;
    preset?: EncodingOptionsPreset | undefined;
    advanced?: EncodingOptions | undefined;
}
export interface EncodedFileOutput {
    /** (optional) */
    fileType?: EncodedFileType;
    /** see egress docs for templating (default {room_name}-{time}) */
    filepath?: string;
    /** disable upload of manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
    aliOSS?: AliOSSUpload | undefined;
}
/** Used to generate HLS segments or other kind of segmented output */
export interface SegmentedFileOutput {
    /** (optional) */
    protocol?: SegmentedFileProtocol;
    /** (optional) */
    filenamePrefix?: string;
    /** (optional) */
    playlistName?: string;
    /** (optional) */
    segmentDuration?: number;
    /** disable upload of manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
    aliOSS?: AliOSSUpload | undefined;
}
export interface DirectFileOutput {
    /** see egress docs for templating (default {track_id}-{time}) */
    filepath?: string;
    /** disable upload of manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
    aliOSS?: AliOSSUpload | undefined;
}
export interface S3Upload {
    accessKey?: string;
    secret?: string;
    region?: string;
    endpoint?: string;
    bucket?: string;
    forcePathStyle?: boolean;
    metadata?: {
        [key: string]: string;
    };
    tagging?: string;
}
export interface S3Upload_MetadataEntry {
    key: string;
    value: string;
}
export interface GCPUpload {
    credentials?: Uint8Array;
    bucket?: string;
}
export interface AzureBlobUpload {
    accountName?: string;
    accountKey?: string;
    containerName?: string;
}
export interface AliOSSUpload {
    accessKey?: string;
    secret?: string;
    region?: string;
    endpoint?: string;
    bucket?: string;
}
export interface StreamOutput {
    /** required */
    protocol?: StreamProtocol;
    /** required */
    urls?: string[];
}
export interface EncodingOptions {
    /** (default 1920) */
    width?: number;
    /** (default 1080) */
    height?: number;
    /** (default 24) */
    depth?: number;
    /** (default 30) */
    framerate?: number;
    /** (default OPUS) */
    audioCodec?: AudioCodec;
    /** (default 128) */
    audioBitrate?: number;
    /** (default 44100) */
    audioFrequency?: number;
    /** (default H264_MAIN) */
    videoCodec?: VideoCodec;
    /** (default 4500) */
    videoBitrate?: number;
}
export interface UpdateLayoutRequest {
    egressId?: string;
    layout?: string;
}
export interface UpdateStreamRequest {
    egressId?: string;
    addOutputUrls?: string[];
    removeOutputUrls?: string[];
}
export interface ListEgressRequest {
    /** (optional, used to filter results) */
    roomName?: string;
}
export interface ListEgressResponse {
    items?: EgressInfo[];
}
export interface StopEgressRequest {
    egressId?: string;
}
export interface EgressInfo {
    egressId?: string;
    roomId?: string;
    roomName?: string;
    status?: EgressStatus;
    startedAt?: number;
    endedAt?: number;
    error?: string;
    roomComposite?: RoomCompositeEgressRequest | undefined;
    trackComposite?: TrackCompositeEgressRequest | undefined;
    track?: TrackEgressRequest | undefined;
    web?: WebEgressRequest | undefined;
    stream?: StreamInfoList | undefined;
    file?: FileInfo | undefined;
    segments?: SegmentsInfo | undefined;
}
export interface StreamInfoList {
    info?: StreamInfo[];
}
export interface StreamInfo {
    url?: string;
    startedAt?: number;
    endedAt?: number;
    duration?: number;
    status?: StreamInfo_Status;
}
export declare enum StreamInfo_Status {
    ACTIVE = 0,
    FINISHED = 1,
    FAILED = 2,
    UNRECOGNIZED = -1
}
export declare function streamInfo_StatusFromJSON(object: any): StreamInfo_Status;
export declare function streamInfo_StatusToJSON(object: StreamInfo_Status): string;
export interface FileInfo {
    filename?: string;
    startedAt?: number;
    endedAt?: number;
    duration?: number;
    size?: number;
    location?: string;
}
export interface SegmentsInfo {
    playlistName?: string;
    duration?: number;
    size?: number;
    playlistLocation?: string;
    segmentCount?: number;
    startedAt?: number;
    endedAt?: number;
}
export interface AutoTrackEgress {
    /** see docs for templating (default {track_id}-{time}) */
    filepath?: string;
    /** disables upload of json manifest file (default false) */
    disableManifest?: boolean;
    s3?: S3Upload | undefined;
    gcp?: GCPUpload | undefined;
    azure?: AzureBlobUpload | undefined;
}
export declare const RoomCompositeEgressRequest: {
    encode(message: RoomCompositeEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoomCompositeEgressRequest;
    fromJSON(object: any): RoomCompositeEgressRequest;
    toJSON(message: RoomCompositeEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        layout?: string | undefined;
        audioOnly?: boolean | undefined;
        videoOnly?: boolean | undefined;
        customBaseUrl?: string | undefined;
        file?: {
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } | undefined;
        segments?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } | undefined;
    } & {
        roomName?: string | undefined;
        layout?: string | undefined;
        audioOnly?: boolean | undefined;
        videoOnly?: boolean | undefined;
        customBaseUrl?: string | undefined;
        file?: ({
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } & {
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
            aliOSS?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof EncodedFileOutput>]: never; }) | undefined;
        stream?: ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["stream"], keyof StreamOutput>]: never; }) | undefined;
        segments?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } & {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K_8 in Exclude<keyof I["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_9 in Exclude<keyof I["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & { [K_10 in Exclude<keyof I["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
            aliOSS?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & { [K_12 in Exclude<keyof I["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } & { [K_14 in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, keyof RoomCompositeEgressRequest>]: never; }>(object: I): RoomCompositeEgressRequest;
};
export declare const TrackCompositeEgressRequest: {
    encode(message: TrackCompositeEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrackCompositeEgressRequest;
    fromJSON(object: any): TrackCompositeEgressRequest;
    toJSON(message: TrackCompositeEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        audioTrackId?: string | undefined;
        videoTrackId?: string | undefined;
        file?: {
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } | undefined;
        segments?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } | undefined;
    } & {
        roomName?: string | undefined;
        audioTrackId?: string | undefined;
        videoTrackId?: string | undefined;
        file?: ({
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } & {
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
            aliOSS?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof EncodedFileOutput>]: never; }) | undefined;
        stream?: ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["stream"], keyof StreamOutput>]: never; }) | undefined;
        segments?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } & {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K_8 in Exclude<keyof I["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_9 in Exclude<keyof I["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & { [K_10 in Exclude<keyof I["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
            aliOSS?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & { [K_12 in Exclude<keyof I["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } & { [K_14 in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, keyof TrackCompositeEgressRequest>]: never; }>(object: I): TrackCompositeEgressRequest;
};
export declare const TrackEgressRequest: {
    encode(message: TrackEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TrackEgressRequest;
    fromJSON(object: any): TrackEgressRequest;
    toJSON(message: TrackEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
        trackId?: string | undefined;
        file?: {
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } | undefined;
        websocketUrl?: string | undefined;
    } & {
        roomName?: string | undefined;
        trackId?: string | undefined;
        file?: ({
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } & {
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
            aliOSS?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof DirectFileOutput>]: never; }) | undefined;
        websocketUrl?: string | undefined;
    } & { [K_6 in Exclude<keyof I, keyof TrackEgressRequest>]: never; }>(object: I): TrackEgressRequest;
};
export declare const WebEgressRequest: {
    encode(message: WebEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebEgressRequest;
    fromJSON(object: any): WebEgressRequest;
    toJSON(message: WebEgressRequest): unknown;
    fromPartial<I extends {
        url?: string | undefined;
        audioOnly?: boolean | undefined;
        videoOnly?: boolean | undefined;
        file?: {
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } | undefined;
        segments?: {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } | undefined;
    } & {
        url?: string | undefined;
        audioOnly?: boolean | undefined;
        videoOnly?: boolean | undefined;
        file?: ({
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } & {
            fileType?: EncodedFileType | undefined;
            filepath?: string | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K in Exclude<keyof I["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_1 in Exclude<keyof I["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & { [K_2 in Exclude<keyof I["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_3 in Exclude<keyof I["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
            aliOSS?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & { [K_4 in Exclude<keyof I["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["file"], keyof EncodedFileOutput>]: never; }) | undefined;
        stream?: ({
            protocol?: StreamProtocol | undefined;
            urls?: string[] | undefined;
        } & {
            protocol?: StreamProtocol | undefined;
            urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["stream"], keyof StreamOutput>]: never; }) | undefined;
        segments?: ({
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } | undefined;
            gcp?: {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } | undefined;
            azure?: {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } | undefined;
            aliOSS?: {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } | undefined;
        } & {
            protocol?: SegmentedFileProtocol | undefined;
            filenamePrefix?: string | undefined;
            playlistName?: string | undefined;
            segmentDuration?: number | undefined;
            disableManifest?: boolean | undefined;
            s3?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: {
                    [x: string]: string | undefined;
                } | undefined;
                tagging?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
                forcePathStyle?: boolean | undefined;
                metadata?: ({
                    [x: string]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                } & { [K_8 in Exclude<keyof I["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                tagging?: string | undefined;
            } & { [K_9 in Exclude<keyof I["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
            gcp?: ({
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & {
                credentials?: Uint8Array | undefined;
                bucket?: string | undefined;
            } & { [K_10 in Exclude<keyof I["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
            azure?: ({
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & {
                accountName?: string | undefined;
                accountKey?: string | undefined;
                containerName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
            aliOSS?: ({
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & {
                accessKey?: string | undefined;
                secret?: string | undefined;
                region?: string | undefined;
                endpoint?: string | undefined;
                bucket?: string | undefined;
            } & { [K_12 in Exclude<keyof I["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
        preset?: EncodingOptionsPreset | undefined;
        advanced?: ({
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } & {
            width?: number | undefined;
            height?: number | undefined;
            depth?: number | undefined;
            framerate?: number | undefined;
            audioCodec?: AudioCodec | undefined;
            audioBitrate?: number | undefined;
            audioFrequency?: number | undefined;
            videoCodec?: VideoCodec | undefined;
            videoBitrate?: number | undefined;
        } & { [K_14 in Exclude<keyof I["advanced"], keyof EncodingOptions>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, keyof WebEgressRequest>]: never; }>(object: I): WebEgressRequest;
};
export declare const EncodedFileOutput: {
    encode(message: EncodedFileOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncodedFileOutput;
    fromJSON(object: any): EncodedFileOutput;
    toJSON(message: EncodedFileOutput): unknown;
    fromPartial<I extends {
        fileType?: EncodedFileType | undefined;
        filepath?: string | undefined;
        disableManifest?: boolean | undefined;
        s3?: {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } | undefined;
        gcp?: {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } | undefined;
        azure?: {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } | undefined;
        aliOSS?: {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } | undefined;
    } & {
        fileType?: EncodedFileType | undefined;
        filepath?: string | undefined;
        disableManifest?: boolean | undefined;
        s3?: ({
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } & {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
        aliOSS?: ({
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } & {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } & { [K_4 in Exclude<keyof I["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof EncodedFileOutput>]: never; }>(object: I): EncodedFileOutput;
};
export declare const SegmentedFileOutput: {
    encode(message: SegmentedFileOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SegmentedFileOutput;
    fromJSON(object: any): SegmentedFileOutput;
    toJSON(message: SegmentedFileOutput): unknown;
    fromPartial<I extends {
        protocol?: SegmentedFileProtocol | undefined;
        filenamePrefix?: string | undefined;
        playlistName?: string | undefined;
        segmentDuration?: number | undefined;
        disableManifest?: boolean | undefined;
        s3?: {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } | undefined;
        gcp?: {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } | undefined;
        azure?: {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } | undefined;
        aliOSS?: {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } | undefined;
    } & {
        protocol?: SegmentedFileProtocol | undefined;
        filenamePrefix?: string | undefined;
        playlistName?: string | undefined;
        segmentDuration?: number | undefined;
        disableManifest?: boolean | undefined;
        s3?: ({
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } & {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
        aliOSS?: ({
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } & {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } & { [K_4 in Exclude<keyof I["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SegmentedFileOutput>]: never; }>(object: I): SegmentedFileOutput;
};
export declare const DirectFileOutput: {
    encode(message: DirectFileOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DirectFileOutput;
    fromJSON(object: any): DirectFileOutput;
    toJSON(message: DirectFileOutput): unknown;
    fromPartial<I extends {
        filepath?: string | undefined;
        disableManifest?: boolean | undefined;
        s3?: {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } | undefined;
        gcp?: {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } | undefined;
        azure?: {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } | undefined;
        aliOSS?: {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } | undefined;
    } & {
        filepath?: string | undefined;
        disableManifest?: boolean | undefined;
        s3?: ({
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } & {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
        aliOSS?: ({
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } & {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
        } & { [K_4 in Exclude<keyof I["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof DirectFileOutput>]: never; }>(object: I): DirectFileOutput;
};
export declare const S3Upload: {
    encode(message: S3Upload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): S3Upload;
    fromJSON(object: any): S3Upload;
    toJSON(message: S3Upload): unknown;
    fromPartial<I extends {
        accessKey?: string | undefined;
        secret?: string | undefined;
        region?: string | undefined;
        endpoint?: string | undefined;
        bucket?: string | undefined;
        forcePathStyle?: boolean | undefined;
        metadata?: {
            [x: string]: string | undefined;
        } | undefined;
        tagging?: string | undefined;
    } & {
        accessKey?: string | undefined;
        secret?: string | undefined;
        region?: string | undefined;
        endpoint?: string | undefined;
        bucket?: string | undefined;
        forcePathStyle?: boolean | undefined;
        metadata?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K in Exclude<keyof I["metadata"], string | number>]: never; }) | undefined;
        tagging?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof S3Upload>]: never; }>(object: I): S3Upload;
};
export declare const S3Upload_MetadataEntry: {
    encode(message: S3Upload_MetadataEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): S3Upload_MetadataEntry;
    fromJSON(object: any): S3Upload_MetadataEntry;
    toJSON(message: S3Upload_MetadataEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof S3Upload_MetadataEntry>]: never; }>(object: I): S3Upload_MetadataEntry;
};
export declare const GCPUpload: {
    encode(message: GCPUpload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GCPUpload;
    fromJSON(object: any): GCPUpload;
    toJSON(message: GCPUpload): unknown;
    fromPartial<I extends {
        credentials?: Uint8Array | undefined;
        bucket?: string | undefined;
    } & {
        credentials?: Uint8Array | undefined;
        bucket?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GCPUpload>]: never; }>(object: I): GCPUpload;
};
export declare const AzureBlobUpload: {
    encode(message: AzureBlobUpload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AzureBlobUpload;
    fromJSON(object: any): AzureBlobUpload;
    toJSON(message: AzureBlobUpload): unknown;
    fromPartial<I extends {
        accountName?: string | undefined;
        accountKey?: string | undefined;
        containerName?: string | undefined;
    } & {
        accountName?: string | undefined;
        accountKey?: string | undefined;
        containerName?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AzureBlobUpload>]: never; }>(object: I): AzureBlobUpload;
};
export declare const AliOSSUpload: {
    encode(message: AliOSSUpload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AliOSSUpload;
    fromJSON(object: any): AliOSSUpload;
    toJSON(message: AliOSSUpload): unknown;
    fromPartial<I extends {
        accessKey?: string | undefined;
        secret?: string | undefined;
        region?: string | undefined;
        endpoint?: string | undefined;
        bucket?: string | undefined;
    } & {
        accessKey?: string | undefined;
        secret?: string | undefined;
        region?: string | undefined;
        endpoint?: string | undefined;
        bucket?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AliOSSUpload>]: never; }>(object: I): AliOSSUpload;
};
export declare const StreamOutput: {
    encode(message: StreamOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamOutput;
    fromJSON(object: any): StreamOutput;
    toJSON(message: StreamOutput): unknown;
    fromPartial<I extends {
        protocol?: StreamProtocol | undefined;
        urls?: string[] | undefined;
    } & {
        protocol?: StreamProtocol | undefined;
        urls?: (string[] & string[] & { [K in Exclude<keyof I["urls"], number | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StreamOutput>]: never; }>(object: I): StreamOutput;
};
export declare const EncodingOptions: {
    encode(message: EncodingOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncodingOptions;
    fromJSON(object: any): EncodingOptions;
    toJSON(message: EncodingOptions): unknown;
    fromPartial<I extends {
        width?: number | undefined;
        height?: number | undefined;
        depth?: number | undefined;
        framerate?: number | undefined;
        audioCodec?: AudioCodec | undefined;
        audioBitrate?: number | undefined;
        audioFrequency?: number | undefined;
        videoCodec?: VideoCodec | undefined;
        videoBitrate?: number | undefined;
    } & {
        width?: number | undefined;
        height?: number | undefined;
        depth?: number | undefined;
        framerate?: number | undefined;
        audioCodec?: AudioCodec | undefined;
        audioBitrate?: number | undefined;
        audioFrequency?: number | undefined;
        videoCodec?: VideoCodec | undefined;
        videoBitrate?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EncodingOptions>]: never; }>(object: I): EncodingOptions;
};
export declare const UpdateLayoutRequest: {
    encode(message: UpdateLayoutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateLayoutRequest;
    fromJSON(object: any): UpdateLayoutRequest;
    toJSON(message: UpdateLayoutRequest): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
        layout?: string | undefined;
    } & {
        egressId?: string | undefined;
        layout?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UpdateLayoutRequest>]: never; }>(object: I): UpdateLayoutRequest;
};
export declare const UpdateStreamRequest: {
    encode(message: UpdateStreamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateStreamRequest;
    fromJSON(object: any): UpdateStreamRequest;
    toJSON(message: UpdateStreamRequest): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
        addOutputUrls?: string[] | undefined;
        removeOutputUrls?: string[] | undefined;
    } & {
        egressId?: string | undefined;
        addOutputUrls?: (string[] & string[] & { [K in Exclude<keyof I["addOutputUrls"], number | keyof string[]>]: never; }) | undefined;
        removeOutputUrls?: (string[] & string[] & { [K_1 in Exclude<keyof I["removeOutputUrls"], number | keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof UpdateStreamRequest>]: never; }>(object: I): UpdateStreamRequest;
};
export declare const ListEgressRequest: {
    encode(message: ListEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListEgressRequest;
    fromJSON(object: any): ListEgressRequest;
    toJSON(message: ListEgressRequest): unknown;
    fromPartial<I extends {
        roomName?: string | undefined;
    } & {
        roomName?: string | undefined;
    } & { [K in Exclude<keyof I, "roomName">]: never; }>(object: I): ListEgressRequest;
};
export declare const ListEgressResponse: {
    encode(message: ListEgressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListEgressResponse;
    fromJSON(object: any): ListEgressResponse;
    toJSON(message: ListEgressResponse): unknown;
    fromPartial<I extends {
        items?: {
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                websocketUrl?: string | undefined;
            } | undefined;
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        items?: ({
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                websocketUrl?: string | undefined;
            } | undefined;
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
        }[] & ({
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                websocketUrl?: string | undefined;
            } | undefined;
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
        } & {
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: ({
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } & {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: ({
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K in Exclude<keyof I["items"][number]["roomComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_2 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["items"][number]["roomComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["items"][number]["roomComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["items"][number]["roomComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["items"][number]["roomComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_8 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_9 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_10 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_11 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_12 in Exclude<keyof I["items"][number]["roomComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_13 in Exclude<keyof I["items"][number]["roomComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & { [K_14 in Exclude<keyof I["items"][number]["roomComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I["items"][number]["roomComposite"], keyof RoomCompositeEgressRequest>]: never; }) | undefined;
            trackComposite?: ({
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } & {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: ({
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_16 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_17 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_18 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_19 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_20 in Exclude<keyof I["items"][number]["trackComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_21 in Exclude<keyof I["items"][number]["trackComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["items"][number]["trackComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I["items"][number]["trackComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_24 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_25 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_26 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_27 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["items"][number]["trackComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_29 in Exclude<keyof I["items"][number]["trackComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & { [K_30 in Exclude<keyof I["items"][number]["trackComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
            } & { [K_31 in Exclude<keyof I["items"][number]["trackComposite"], keyof TrackCompositeEgressRequest>]: never; }) | undefined;
            track?: ({
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                websocketUrl?: string | undefined;
            } & {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: ({
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_32 in Exclude<keyof I["items"][number]["track"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_33 in Exclude<keyof I["items"][number]["track"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_34 in Exclude<keyof I["items"][number]["track"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_35 in Exclude<keyof I["items"][number]["track"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_36 in Exclude<keyof I["items"][number]["track"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I["items"][number]["track"]["file"], keyof DirectFileOutput>]: never; }) | undefined;
                websocketUrl?: string | undefined;
            } & { [K_38 in Exclude<keyof I["items"][number]["track"], keyof TrackEgressRequest>]: never; }) | undefined;
            web?: ({
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } & {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: ({
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_39 in Exclude<keyof I["items"][number]["web"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_40 in Exclude<keyof I["items"][number]["web"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_41 in Exclude<keyof I["items"][number]["web"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_42 in Exclude<keyof I["items"][number]["web"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_43 in Exclude<keyof I["items"][number]["web"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_44 in Exclude<keyof I["items"][number]["web"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_45 in Exclude<keyof I["items"][number]["web"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I["items"][number]["web"]["stream"], keyof StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } & {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: ({
                            [x: string]: string | undefined;
                        } & {
                            [x: string]: string | undefined;
                        } & { [K_47 in Exclude<keyof I["items"][number]["web"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_48 in Exclude<keyof I["items"][number]["web"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_49 in Exclude<keyof I["items"][number]["web"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_50 in Exclude<keyof I["items"][number]["web"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                    aliOSS?: ({
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } & { [K_51 in Exclude<keyof I["items"][number]["web"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
                } & { [K_52 in Exclude<keyof I["items"][number]["web"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & { [K_53 in Exclude<keyof I["items"][number]["web"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I["items"][number]["web"], keyof WebEgressRequest>]: never; }) | undefined;
            stream?: ({
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                }[] | undefined;
            } & {
                info?: ({
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                }[] & ({
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                } & {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                } & { [K_55 in Exclude<keyof I["items"][number]["stream"]["info"][number], keyof StreamInfo>]: never; })[] & { [K_56 in Exclude<keyof I["items"][number]["stream"]["info"], number | keyof {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_57 in Exclude<keyof I["items"][number]["stream"], "info">]: never; }) | undefined;
            file?: ({
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } & {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } & { [K_58 in Exclude<keyof I["items"][number]["file"], keyof FileInfo>]: never; }) | undefined;
            segments?: ({
                playlistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & {
                playlistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } & { [K_59 in Exclude<keyof I["items"][number]["segments"], keyof SegmentsInfo>]: never; }) | undefined;
        } & { [K_60 in Exclude<keyof I["items"][number], keyof EgressInfo>]: never; })[] & { [K_61 in Exclude<keyof I["items"], number | keyof {
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: EgressStatus | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            error?: string | undefined;
            roomComposite?: {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            track?: {
                roomName?: string | undefined;
                trackId?: string | undefined;
                file?: {
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                websocketUrl?: string | undefined;
            } | undefined;
            web?: {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: {
                    fileType?: EncodedFileType | undefined;
                    filepath?: string | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                stream?: {
                    protocol?: StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: SegmentedFileProtocol | undefined;
                    filenamePrefix?: string | undefined;
                    playlistName?: string | undefined;
                    segmentDuration?: number | undefined;
                    disableManifest?: boolean | undefined;
                    s3?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                        forcePathStyle?: boolean | undefined;
                        metadata?: {
                            [x: string]: string | undefined;
                        } | undefined;
                        tagging?: string | undefined;
                    } | undefined;
                    gcp?: {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                    azure?: {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } | undefined;
                    aliOSS?: {
                        accessKey?: string | undefined;
                        secret?: string | undefined;
                        region?: string | undefined;
                        endpoint?: string | undefined;
                        bucket?: string | undefined;
                    } | undefined;
                } | undefined;
                preset?: EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: StreamInfo_Status | undefined;
                }[] | undefined;
            } | undefined;
            file?: {
                filename?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                location?: string | undefined;
            } | undefined;
            segments?: {
                playlistName?: string | undefined;
                duration?: number | undefined;
                size?: number | undefined;
                playlistLocation?: string | undefined;
                segmentCount?: number | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_62 in Exclude<keyof I, "items">]: never; }>(object: I): ListEgressResponse;
};
export declare const StopEgressRequest: {
    encode(message: StopEgressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopEgressRequest;
    fromJSON(object: any): StopEgressRequest;
    toJSON(message: StopEgressRequest): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
    } & {
        egressId?: string | undefined;
    } & { [K in Exclude<keyof I, "egressId">]: never; }>(object: I): StopEgressRequest;
};
export declare const EgressInfo: {
    encode(message: EgressInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EgressInfo;
    fromJSON(object: any): EgressInfo;
    toJSON(message: EgressInfo): unknown;
    fromPartial<I extends {
        egressId?: string | undefined;
        roomId?: string | undefined;
        roomName?: string | undefined;
        status?: EgressStatus | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        error?: string | undefined;
        roomComposite?: {
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } | undefined;
        } | undefined;
        trackComposite?: {
            roomName?: string | undefined;
            audioTrackId?: string | undefined;
            videoTrackId?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } | undefined;
        } | undefined;
        track?: {
            roomName?: string | undefined;
            trackId?: string | undefined;
            file?: {
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            websocketUrl?: string | undefined;
        } | undefined;
        web?: {
            url?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } | undefined;
        } | undefined;
        stream?: {
            info?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
            }[] | undefined;
        } | undefined;
        file?: {
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } | undefined;
        segments?: {
            playlistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } | undefined;
    } & {
        egressId?: string | undefined;
        roomId?: string | undefined;
        roomName?: string | undefined;
        status?: EgressStatus | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        error?: string | undefined;
        roomComposite?: ({
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } | undefined;
        } & {
            roomName?: string | undefined;
            layout?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            customBaseUrl?: string | undefined;
            file?: ({
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K in Exclude<keyof I["roomComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_1 in Exclude<keyof I["roomComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & { [K_2 in Exclude<keyof I["roomComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_3 in Exclude<keyof I["roomComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_4 in Exclude<keyof I["roomComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["roomComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
            stream?: ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_6 in Exclude<keyof I["roomComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["roomComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
            segments?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_8 in Exclude<keyof I["roomComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_9 in Exclude<keyof I["roomComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & { [K_10 in Exclude<keyof I["roomComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_11 in Exclude<keyof I["roomComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_12 in Exclude<keyof I["roomComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["roomComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } & { [K_14 in Exclude<keyof I["roomComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["roomComposite"], keyof RoomCompositeEgressRequest>]: never; }) | undefined;
        trackComposite?: ({
            roomName?: string | undefined;
            audioTrackId?: string | undefined;
            videoTrackId?: string | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } | undefined;
        } & {
            roomName?: string | undefined;
            audioTrackId?: string | undefined;
            videoTrackId?: string | undefined;
            file?: ({
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_16 in Exclude<keyof I["trackComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_17 in Exclude<keyof I["trackComposite"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & { [K_18 in Exclude<keyof I["trackComposite"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_19 in Exclude<keyof I["trackComposite"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_20 in Exclude<keyof I["trackComposite"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["trackComposite"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
            stream?: ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_22 in Exclude<keyof I["trackComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I["trackComposite"]["stream"], keyof StreamOutput>]: never; }) | undefined;
            segments?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_24 in Exclude<keyof I["trackComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_25 in Exclude<keyof I["trackComposite"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & { [K_26 in Exclude<keyof I["trackComposite"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_27 in Exclude<keyof I["trackComposite"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_28 in Exclude<keyof I["trackComposite"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_29 in Exclude<keyof I["trackComposite"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } & { [K_30 in Exclude<keyof I["trackComposite"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I["trackComposite"], keyof TrackCompositeEgressRequest>]: never; }) | undefined;
        track?: ({
            roomName?: string | undefined;
            trackId?: string | undefined;
            file?: {
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            websocketUrl?: string | undefined;
        } & {
            roomName?: string | undefined;
            trackId?: string | undefined;
            file?: ({
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_32 in Exclude<keyof I["track"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_33 in Exclude<keyof I["track"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & { [K_34 in Exclude<keyof I["track"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_35 in Exclude<keyof I["track"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_36 in Exclude<keyof I["track"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I["track"]["file"], keyof DirectFileOutput>]: never; }) | undefined;
            websocketUrl?: string | undefined;
        } & { [K_38 in Exclude<keyof I["track"], keyof TrackEgressRequest>]: never; }) | undefined;
        web?: ({
            url?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            file?: {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } | undefined;
            segments?: {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } | undefined;
        } & {
            url?: string | undefined;
            audioOnly?: boolean | undefined;
            videoOnly?: boolean | undefined;
            file?: ({
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                fileType?: EncodedFileType | undefined;
                filepath?: string | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_39 in Exclude<keyof I["web"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_40 in Exclude<keyof I["web"]["file"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & { [K_41 in Exclude<keyof I["web"]["file"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_42 in Exclude<keyof I["web"]["file"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_43 in Exclude<keyof I["web"]["file"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_44 in Exclude<keyof I["web"]["file"], keyof EncodedFileOutput>]: never; }) | undefined;
            stream?: ({
                protocol?: StreamProtocol | undefined;
                urls?: string[] | undefined;
            } & {
                protocol?: StreamProtocol | undefined;
                urls?: (string[] & string[] & { [K_45 in Exclude<keyof I["web"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I["web"]["stream"], keyof StreamOutput>]: never; }) | undefined;
            segments?: ({
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } | undefined;
                gcp?: {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } | undefined;
                azure?: {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } | undefined;
                aliOSS?: {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } | undefined;
            } & {
                protocol?: SegmentedFileProtocol | undefined;
                filenamePrefix?: string | undefined;
                playlistName?: string | undefined;
                segmentDuration?: number | undefined;
                disableManifest?: boolean | undefined;
                s3?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    tagging?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                    forcePathStyle?: boolean | undefined;
                    metadata?: ({
                        [x: string]: string | undefined;
                    } & {
                        [x: string]: string | undefined;
                    } & { [K_47 in Exclude<keyof I["web"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                    tagging?: string | undefined;
                } & { [K_48 in Exclude<keyof I["web"]["segments"]["s3"], keyof S3Upload>]: never; }) | undefined;
                gcp?: ({
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & {
                    credentials?: Uint8Array | undefined;
                    bucket?: string | undefined;
                } & { [K_49 in Exclude<keyof I["web"]["segments"]["gcp"], keyof GCPUpload>]: never; }) | undefined;
                azure?: ({
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & {
                    accountName?: string | undefined;
                    accountKey?: string | undefined;
                    containerName?: string | undefined;
                } & { [K_50 in Exclude<keyof I["web"]["segments"]["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
                aliOSS?: ({
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & {
                    accessKey?: string | undefined;
                    secret?: string | undefined;
                    region?: string | undefined;
                    endpoint?: string | undefined;
                    bucket?: string | undefined;
                } & { [K_51 in Exclude<keyof I["web"]["segments"]["aliOSS"], keyof AliOSSUpload>]: never; }) | undefined;
            } & { [K_52 in Exclude<keyof I["web"]["segments"], keyof SegmentedFileOutput>]: never; }) | undefined;
            preset?: EncodingOptionsPreset | undefined;
            advanced?: ({
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } & {
                width?: number | undefined;
                height?: number | undefined;
                depth?: number | undefined;
                framerate?: number | undefined;
                audioCodec?: AudioCodec | undefined;
                audioBitrate?: number | undefined;
                audioFrequency?: number | undefined;
                videoCodec?: VideoCodec | undefined;
                videoBitrate?: number | undefined;
            } & { [K_53 in Exclude<keyof I["web"]["advanced"], keyof EncodingOptions>]: never; }) | undefined;
        } & { [K_54 in Exclude<keyof I["web"], keyof WebEgressRequest>]: never; }) | undefined;
        stream?: ({
            info?: {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
            }[] | undefined;
        } & {
            info?: ({
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
            }[] & ({
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
            } & {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
            } & { [K_55 in Exclude<keyof I["stream"]["info"][number], keyof StreamInfo>]: never; })[] & { [K_56 in Exclude<keyof I["stream"]["info"], number | keyof {
                url?: string | undefined;
                startedAt?: number | undefined;
                endedAt?: number | undefined;
                duration?: number | undefined;
                status?: StreamInfo_Status | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_57 in Exclude<keyof I["stream"], "info">]: never; }) | undefined;
        file?: ({
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } & {
            filename?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            location?: string | undefined;
        } & { [K_58 in Exclude<keyof I["file"], keyof FileInfo>]: never; }) | undefined;
        segments?: ({
            playlistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & {
            playlistName?: string | undefined;
            duration?: number | undefined;
            size?: number | undefined;
            playlistLocation?: string | undefined;
            segmentCount?: number | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
        } & { [K_59 in Exclude<keyof I["segments"], keyof SegmentsInfo>]: never; }) | undefined;
    } & { [K_60 in Exclude<keyof I, keyof EgressInfo>]: never; }>(object: I): EgressInfo;
};
export declare const StreamInfoList: {
    encode(message: StreamInfoList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamInfoList;
    fromJSON(object: any): StreamInfoList;
    toJSON(message: StreamInfoList): unknown;
    fromPartial<I extends {
        info?: {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
        }[] | undefined;
    } & {
        info?: ({
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
        }[] & ({
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
        } & {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
        } & { [K in Exclude<keyof I["info"][number], keyof StreamInfo>]: never; })[] & { [K_1 in Exclude<keyof I["info"], number | keyof {
            url?: string | undefined;
            startedAt?: number | undefined;
            endedAt?: number | undefined;
            duration?: number | undefined;
            status?: StreamInfo_Status | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "info">]: never; }>(object: I): StreamInfoList;
};
export declare const StreamInfo: {
    encode(message: StreamInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamInfo;
    fromJSON(object: any): StreamInfo;
    toJSON(message: StreamInfo): unknown;
    fromPartial<I extends {
        url?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        status?: StreamInfo_Status | undefined;
    } & {
        url?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        status?: StreamInfo_Status | undefined;
    } & { [K in Exclude<keyof I, keyof StreamInfo>]: never; }>(object: I): StreamInfo;
};
export declare const FileInfo: {
    encode(message: FileInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FileInfo;
    fromJSON(object: any): FileInfo;
    toJSON(message: FileInfo): unknown;
    fromPartial<I extends {
        filename?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        location?: string | undefined;
    } & {
        filename?: string | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        location?: string | undefined;
    } & { [K in Exclude<keyof I, keyof FileInfo>]: never; }>(object: I): FileInfo;
};
export declare const SegmentsInfo: {
    encode(message: SegmentsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SegmentsInfo;
    fromJSON(object: any): SegmentsInfo;
    toJSON(message: SegmentsInfo): unknown;
    fromPartial<I extends {
        playlistName?: string | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        playlistLocation?: string | undefined;
        segmentCount?: number | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
    } & {
        playlistName?: string | undefined;
        duration?: number | undefined;
        size?: number | undefined;
        playlistLocation?: string | undefined;
        segmentCount?: number | undefined;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SegmentsInfo>]: never; }>(object: I): SegmentsInfo;
};
export declare const AutoTrackEgress: {
    encode(message: AutoTrackEgress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AutoTrackEgress;
    fromJSON(object: any): AutoTrackEgress;
    toJSON(message: AutoTrackEgress): unknown;
    fromPartial<I extends {
        filepath?: string | undefined;
        disableManifest?: boolean | undefined;
        s3?: {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } | undefined;
        gcp?: {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } | undefined;
        azure?: {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } | undefined;
    } & {
        filepath?: string | undefined;
        disableManifest?: boolean | undefined;
        s3?: ({
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: {
                [x: string]: string | undefined;
            } | undefined;
            tagging?: string | undefined;
        } & {
            accessKey?: string | undefined;
            secret?: string | undefined;
            region?: string | undefined;
            endpoint?: string | undefined;
            bucket?: string | undefined;
            forcePathStyle?: boolean | undefined;
            metadata?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K in Exclude<keyof I["s3"]["metadata"], string | number>]: never; }) | undefined;
            tagging?: string | undefined;
        } & { [K_1 in Exclude<keyof I["s3"], keyof S3Upload>]: never; }) | undefined;
        gcp?: ({
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & {
            credentials?: Uint8Array | undefined;
            bucket?: string | undefined;
        } & { [K_2 in Exclude<keyof I["gcp"], keyof GCPUpload>]: never; }) | undefined;
        azure?: ({
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & {
            accountName?: string | undefined;
            accountKey?: string | undefined;
            containerName?: string | undefined;
        } & { [K_3 in Exclude<keyof I["azure"], keyof AzureBlobUpload>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof AutoTrackEgress>]: never; }>(object: I): AutoTrackEgress;
};
export interface Egress {
    /** start recording or streaming a room, participant, or tracks */
    StartRoomCompositeEgress(request: RoomCompositeEgressRequest): Promise<EgressInfo>;
    StartTrackCompositeEgress(request: TrackCompositeEgressRequest): Promise<EgressInfo>;
    StartTrackEgress(request: TrackEgressRequest): Promise<EgressInfo>;
    StartWebEgress(request: WebEgressRequest): Promise<EgressInfo>;
    /** update web composite layout */
    UpdateLayout(request: UpdateLayoutRequest): Promise<EgressInfo>;
    /** add or remove stream endpoints */
    UpdateStream(request: UpdateStreamRequest): Promise<EgressInfo>;
    /** list available egress */
    ListEgress(request: ListEgressRequest): Promise<ListEgressResponse>;
    /** stop a recording or stream */
    StopEgress(request: StopEgressRequest): Promise<EgressInfo>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
