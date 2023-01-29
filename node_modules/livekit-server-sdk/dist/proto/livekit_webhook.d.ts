import _m0 from "protobufjs/minimal";
import { EgressInfo } from "./livekit_egress";
import { IngressInfo } from "./livekit_ingress";
import { ParticipantInfo, Room, TrackInfo } from "./livekit_models";
export declare const protobufPackage = "livekit";
export interface WebhookEvent {
    /**
     * one of room_started, room_finished, participant_joined, participant_left,
     * track_published, track_unpublished, egress_started, egress_updated, egress_ended, ingress_started, ingress_ended
     */
    event?: string;
    room?: Room;
    /** set when event is participant_* or track_* */
    participant?: ParticipantInfo;
    /** set when event is egress_* */
    egressInfo?: EgressInfo;
    /** set when event is ingress_* */
    ingressInfo?: IngressInfo;
    /** set when event is track_* */
    track?: TrackInfo;
    /** unique event uuid */
    id?: string;
    /** timestamp in seconds */
    createdAt?: number;
}
export declare const WebhookEvent: {
    encode(message: WebhookEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WebhookEvent;
    fromJSON(object: any): WebhookEvent;
    toJSON(message: WebhookEvent): unknown;
    fromPartial<I extends {
        event?: string | undefined;
        room?: {
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            activeRecording?: boolean | undefined;
        } | undefined;
        participant?: {
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
            } | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        } | undefined;
        egressInfo?: {
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: import("./livekit_egress").EgressStatus | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: import("./livekit_egress").StreamInfo_Status | undefined;
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
        } | undefined;
        ingressInfo?: {
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: import("./livekit_ingress").IngressInput | undefined;
            audio?: {
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
            video?: {
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: {
                status?: import("./livekit_ingress").IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: import("./livekit_models").TrackSource | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    codecs?: {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    stereo?: boolean | undefined;
                    disableRed?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        track?: {
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: import("./livekit_models").TrackSource | undefined;
            layers?: {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
            mimeType?: string | undefined;
            mid?: string | undefined;
            codecs?: {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
        } | undefined;
        id?: string | undefined;
        createdAt?: number | undefined;
    } & {
        event?: string | undefined;
        room?: ({
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            activeRecording?: boolean | undefined;
        } & {
            sid?: string | undefined;
            name?: string | undefined;
            emptyTimeout?: number | undefined;
            maxParticipants?: number | undefined;
            creationTime?: number | undefined;
            turnPassword?: string | undefined;
            enabledCodecs?: ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[] & ({
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            } & { [K in Exclude<keyof I["room"]["enabledCodecs"][number], keyof import("./livekit_models").Codec>]: never; })[] & { [K_1 in Exclude<keyof I["room"]["enabledCodecs"], number | keyof {
                mime?: string | undefined;
                fmtpLine?: string | undefined;
            }[]>]: never; }) | undefined;
            metadata?: string | undefined;
            numParticipants?: number | undefined;
            activeRecording?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["room"], keyof Room>]: never; }) | undefined;
        participant?: ({
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
            }[] | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
            } | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        } & {
            sid?: string | undefined;
            identity?: string | undefined;
            state?: import("./livekit_models").ParticipantInfo_State | undefined;
            tracks?: ({
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
            }[] & ({
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
            } & {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] & ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & { [K_3 in Exclude<keyof I["participant"]["tracks"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_4 in Exclude<keyof I["participant"]["tracks"][number]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: ({
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] & ({
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                } & {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: ({
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] & ({
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    } & {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    } & { [K_5 in Exclude<keyof I["participant"]["tracks"][number]["codecs"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_6 in Exclude<keyof I["participant"]["tracks"][number]["codecs"][number]["layers"], number | keyof {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["participant"]["tracks"][number]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_8 in Exclude<keyof I["participant"]["tracks"][number]["codecs"], number | keyof {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
            } & { [K_9 in Exclude<keyof I["participant"]["tracks"][number], keyof TrackInfo>]: never; })[] & { [K_10 in Exclude<keyof I["participant"]["tracks"], number | keyof {
                sid?: string | undefined;
                type?: import("./livekit_models").TrackType | undefined;
                name?: string | undefined;
                muted?: boolean | undefined;
                width?: number | undefined;
                height?: number | undefined;
                simulcast?: boolean | undefined;
                disableDtx?: boolean | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
                mimeType?: string | undefined;
                mid?: string | undefined;
                codecs?: {
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    cid?: string | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                }[] | undefined;
                stereo?: boolean | undefined;
                disableRed?: boolean | undefined;
            }[]>]: never; }) | undefined;
            metadata?: string | undefined;
            joinedAt?: number | undefined;
            name?: string | undefined;
            version?: number | undefined;
            permission?: ({
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
            } & {
                canSubscribe?: boolean | undefined;
                canPublish?: boolean | undefined;
                canPublishData?: boolean | undefined;
                hidden?: boolean | undefined;
                recorder?: boolean | undefined;
            } & { [K_11 in Exclude<keyof I["participant"]["permission"], keyof import("./livekit_models").ParticipantPermission>]: never; }) | undefined;
            region?: string | undefined;
            isPublisher?: boolean | undefined;
        } & { [K_12 in Exclude<keyof I["participant"], keyof ParticipantInfo>]: never; }) | undefined;
        egressInfo?: ({
            egressId?: string | undefined;
            roomId?: string | undefined;
            roomName?: string | undefined;
            status?: import("./livekit_egress").EgressStatus | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            trackComposite?: {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } | undefined;
            stream?: {
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: import("./livekit_egress").StreamInfo_Status | undefined;
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
            status?: import("./livekit_egress").EgressStatus | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } & {
                roomName?: string | undefined;
                layout?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                customBaseUrl?: string | undefined;
                file?: ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                        } & { [K_13 in Exclude<keyof I["egressInfo"]["roomComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_14 in Exclude<keyof I["egressInfo"]["roomComposite"]["file"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_15 in Exclude<keyof I["egressInfo"]["roomComposite"]["file"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_16 in Exclude<keyof I["egressInfo"]["roomComposite"]["file"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_17 in Exclude<keyof I["egressInfo"]["roomComposite"]["file"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_18 in Exclude<keyof I["egressInfo"]["roomComposite"]["file"], keyof import("./livekit_egress").EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_19 in Exclude<keyof I["egressInfo"]["roomComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["egressInfo"]["roomComposite"]["stream"], keyof import("./livekit_egress").StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                        } & { [K_21 in Exclude<keyof I["egressInfo"]["roomComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_22 in Exclude<keyof I["egressInfo"]["roomComposite"]["segments"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_23 in Exclude<keyof I["egressInfo"]["roomComposite"]["segments"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_24 in Exclude<keyof I["egressInfo"]["roomComposite"]["segments"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_25 in Exclude<keyof I["egressInfo"]["roomComposite"]["segments"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I["egressInfo"]["roomComposite"]["segments"], keyof import("./livekit_egress").SegmentedFileOutput>]: never; }) | undefined;
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & { [K_27 in Exclude<keyof I["egressInfo"]["roomComposite"]["advanced"], keyof import("./livekit_egress").EncodingOptions>]: never; }) | undefined;
            } & { [K_28 in Exclude<keyof I["egressInfo"]["roomComposite"], keyof import("./livekit_egress").RoomCompositeEgressRequest>]: never; }) | undefined;
            trackComposite?: ({
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } & {
                roomName?: string | undefined;
                audioTrackId?: string | undefined;
                videoTrackId?: string | undefined;
                file?: ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                        } & { [K_29 in Exclude<keyof I["egressInfo"]["trackComposite"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_30 in Exclude<keyof I["egressInfo"]["trackComposite"]["file"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_31 in Exclude<keyof I["egressInfo"]["trackComposite"]["file"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_32 in Exclude<keyof I["egressInfo"]["trackComposite"]["file"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_33 in Exclude<keyof I["egressInfo"]["trackComposite"]["file"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I["egressInfo"]["trackComposite"]["file"], keyof import("./livekit_egress").EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_35 in Exclude<keyof I["egressInfo"]["trackComposite"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_36 in Exclude<keyof I["egressInfo"]["trackComposite"]["stream"], keyof import("./livekit_egress").StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                        } & { [K_37 in Exclude<keyof I["egressInfo"]["trackComposite"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_38 in Exclude<keyof I["egressInfo"]["trackComposite"]["segments"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_39 in Exclude<keyof I["egressInfo"]["trackComposite"]["segments"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_40 in Exclude<keyof I["egressInfo"]["trackComposite"]["segments"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_41 in Exclude<keyof I["egressInfo"]["trackComposite"]["segments"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_42 in Exclude<keyof I["egressInfo"]["trackComposite"]["segments"], keyof import("./livekit_egress").SegmentedFileOutput>]: never; }) | undefined;
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & { [K_43 in Exclude<keyof I["egressInfo"]["trackComposite"]["advanced"], keyof import("./livekit_egress").EncodingOptions>]: never; }) | undefined;
            } & { [K_44 in Exclude<keyof I["egressInfo"]["trackComposite"], keyof import("./livekit_egress").TrackCompositeEgressRequest>]: never; }) | undefined;
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
                        } & { [K_45 in Exclude<keyof I["egressInfo"]["track"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_46 in Exclude<keyof I["egressInfo"]["track"]["file"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_47 in Exclude<keyof I["egressInfo"]["track"]["file"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_48 in Exclude<keyof I["egressInfo"]["track"]["file"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_49 in Exclude<keyof I["egressInfo"]["track"]["file"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_50 in Exclude<keyof I["egressInfo"]["track"]["file"], keyof import("./livekit_egress").DirectFileOutput>]: never; }) | undefined;
                websocketUrl?: string | undefined;
            } & { [K_51 in Exclude<keyof I["egressInfo"]["track"], keyof import("./livekit_egress").TrackEgressRequest>]: never; }) | undefined;
            web?: ({
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: {
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } | undefined;
                segments?: {
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } | undefined;
            } & {
                url?: string | undefined;
                audioOnly?: boolean | undefined;
                videoOnly?: boolean | undefined;
                file?: ({
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                    fileType?: import("./livekit_egress").EncodedFileType | undefined;
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
                        } & { [K_52 in Exclude<keyof I["egressInfo"]["web"]["file"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_53 in Exclude<keyof I["egressInfo"]["web"]["file"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_54 in Exclude<keyof I["egressInfo"]["web"]["file"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_55 in Exclude<keyof I["egressInfo"]["web"]["file"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_56 in Exclude<keyof I["egressInfo"]["web"]["file"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_57 in Exclude<keyof I["egressInfo"]["web"]["file"], keyof import("./livekit_egress").EncodedFileOutput>]: never; }) | undefined;
                stream?: ({
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: string[] | undefined;
                } & {
                    protocol?: import("./livekit_egress").StreamProtocol | undefined;
                    urls?: (string[] & string[] & { [K_58 in Exclude<keyof I["egressInfo"]["web"]["stream"]["urls"], number | keyof string[]>]: never; }) | undefined;
                } & { [K_59 in Exclude<keyof I["egressInfo"]["web"]["stream"], keyof import("./livekit_egress").StreamOutput>]: never; }) | undefined;
                segments?: ({
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                    protocol?: import("./livekit_egress").SegmentedFileProtocol | undefined;
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
                        } & { [K_60 in Exclude<keyof I["egressInfo"]["web"]["segments"]["s3"]["metadata"], string | number>]: never; }) | undefined;
                        tagging?: string | undefined;
                    } & { [K_61 in Exclude<keyof I["egressInfo"]["web"]["segments"]["s3"], keyof import("./livekit_egress").S3Upload>]: never; }) | undefined;
                    gcp?: ({
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & {
                        credentials?: Uint8Array | undefined;
                        bucket?: string | undefined;
                    } & { [K_62 in Exclude<keyof I["egressInfo"]["web"]["segments"]["gcp"], keyof import("./livekit_egress").GCPUpload>]: never; }) | undefined;
                    azure?: ({
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & {
                        accountName?: string | undefined;
                        accountKey?: string | undefined;
                        containerName?: string | undefined;
                    } & { [K_63 in Exclude<keyof I["egressInfo"]["web"]["segments"]["azure"], keyof import("./livekit_egress").AzureBlobUpload>]: never; }) | undefined;
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
                    } & { [K_64 in Exclude<keyof I["egressInfo"]["web"]["segments"]["aliOSS"], keyof import("./livekit_egress").AliOSSUpload>]: never; }) | undefined;
                } & { [K_65 in Exclude<keyof I["egressInfo"]["web"]["segments"], keyof import("./livekit_egress").SegmentedFileOutput>]: never; }) | undefined;
                preset?: import("./livekit_egress").EncodingOptionsPreset | undefined;
                advanced?: ({
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & {
                    width?: number | undefined;
                    height?: number | undefined;
                    depth?: number | undefined;
                    framerate?: number | undefined;
                    audioCodec?: import("./livekit_egress").AudioCodec | undefined;
                    audioBitrate?: number | undefined;
                    audioFrequency?: number | undefined;
                    videoCodec?: import("./livekit_egress").VideoCodec | undefined;
                    videoBitrate?: number | undefined;
                } & { [K_66 in Exclude<keyof I["egressInfo"]["web"]["advanced"], keyof import("./livekit_egress").EncodingOptions>]: never; }) | undefined;
            } & { [K_67 in Exclude<keyof I["egressInfo"]["web"], keyof import("./livekit_egress").WebEgressRequest>]: never; }) | undefined;
            stream?: ({
                info?: {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: import("./livekit_egress").StreamInfo_Status | undefined;
                }[] | undefined;
            } & {
                info?: ({
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: import("./livekit_egress").StreamInfo_Status | undefined;
                }[] & ({
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: import("./livekit_egress").StreamInfo_Status | undefined;
                } & {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: import("./livekit_egress").StreamInfo_Status | undefined;
                } & { [K_68 in Exclude<keyof I["egressInfo"]["stream"]["info"][number], keyof import("./livekit_egress").StreamInfo>]: never; })[] & { [K_69 in Exclude<keyof I["egressInfo"]["stream"]["info"], number | keyof {
                    url?: string | undefined;
                    startedAt?: number | undefined;
                    endedAt?: number | undefined;
                    duration?: number | undefined;
                    status?: import("./livekit_egress").StreamInfo_Status | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_70 in Exclude<keyof I["egressInfo"]["stream"], "info">]: never; }) | undefined;
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
            } & { [K_71 in Exclude<keyof I["egressInfo"]["file"], keyof import("./livekit_egress").FileInfo>]: never; }) | undefined;
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
            } & { [K_72 in Exclude<keyof I["egressInfo"]["segments"], keyof import("./livekit_egress").SegmentsInfo>]: never; }) | undefined;
        } & { [K_73 in Exclude<keyof I["egressInfo"], keyof EgressInfo>]: never; }) | undefined;
        ingressInfo?: ({
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: import("./livekit_ingress").IngressInput | undefined;
            audio?: {
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } | undefined;
            video?: {
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: {
                status?: import("./livekit_ingress").IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: import("./livekit_models").TrackSource | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    codecs?: {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    stereo?: boolean | undefined;
                    disableRed?: boolean | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            ingressId?: string | undefined;
            name?: string | undefined;
            streamKey?: string | undefined;
            url?: string | undefined;
            inputType?: import("./livekit_ingress").IngressInput | undefined;
            audio?: ({
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & {
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                bitrate?: number | undefined;
                disableDtx?: boolean | undefined;
                channels?: number | undefined;
            } & { [K_74 in Exclude<keyof I["ingressInfo"]["audio"], keyof import("./livekit_ingress").IngressAudioOptions>]: never; }) | undefined;
            video?: ({
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } & {
                name?: string | undefined;
                source?: import("./livekit_models").TrackSource | undefined;
                mimeType?: string | undefined;
                layers?: ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] & ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & { [K_75 in Exclude<keyof I["ingressInfo"]["video"]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_76 in Exclude<keyof I["ingressInfo"]["video"]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_77 in Exclude<keyof I["ingressInfo"]["video"], keyof import("./livekit_ingress").IngressVideoOptions>]: never; }) | undefined;
            roomName?: string | undefined;
            participantIdentity?: string | undefined;
            participantName?: string | undefined;
            reusable?: boolean | undefined;
            state?: ({
                status?: import("./livekit_ingress").IngressState_Status | undefined;
                error?: string | undefined;
                video?: {
                    mimeType?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } | undefined;
                audio?: {
                    mimeType?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                tracks?: {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: import("./livekit_models").TrackSource | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    codecs?: {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    stereo?: boolean | undefined;
                    disableRed?: boolean | undefined;
                }[] | undefined;
            } & {
                status?: import("./livekit_ingress").IngressState_Status | undefined;
                error?: string | undefined;
                video?: ({
                    mimeType?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } & {
                    mimeType?: number | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    framerate?: number | undefined;
                } & { [K_78 in Exclude<keyof I["ingressInfo"]["state"]["video"], keyof import("./livekit_ingress").InputVideoState>]: never; }) | undefined;
                audio?: ({
                    mimeType?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } & {
                    mimeType?: number | undefined;
                    channels?: number | undefined;
                    sampleRate?: number | undefined;
                } & { [K_79 in Exclude<keyof I["ingressInfo"]["state"]["audio"], keyof import("./livekit_ingress").InputAudioState>]: never; }) | undefined;
                roomId?: string | undefined;
                startedAt?: number | undefined;
                tracks?: ({
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: import("./livekit_models").TrackSource | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    codecs?: {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    stereo?: boolean | undefined;
                    disableRed?: boolean | undefined;
                }[] & ({
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: import("./livekit_models").TrackSource | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    codecs?: {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    stereo?: boolean | undefined;
                    disableRed?: boolean | undefined;
                } & {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: import("./livekit_models").TrackSource | undefined;
                    layers?: ({
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] & ({
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    } & {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    } & { [K_80 in Exclude<keyof I["ingressInfo"]["state"]["tracks"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_81 in Exclude<keyof I["ingressInfo"]["state"]["tracks"][number]["layers"], number | keyof {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[]>]: never; }) | undefined;
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    codecs?: ({
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[] & ({
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    } & {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: ({
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] & ({
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        } & {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        } & { [K_82 in Exclude<keyof I["ingressInfo"]["state"]["tracks"][number]["codecs"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_83 in Exclude<keyof I["ingressInfo"]["state"]["tracks"][number]["codecs"][number]["layers"], number | keyof {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_84 in Exclude<keyof I["ingressInfo"]["state"]["tracks"][number]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_85 in Exclude<keyof I["ingressInfo"]["state"]["tracks"][number]["codecs"], number | keyof {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    stereo?: boolean | undefined;
                    disableRed?: boolean | undefined;
                } & { [K_86 in Exclude<keyof I["ingressInfo"]["state"]["tracks"][number], keyof TrackInfo>]: never; })[] & { [K_87 in Exclude<keyof I["ingressInfo"]["state"]["tracks"], number | keyof {
                    sid?: string | undefined;
                    type?: import("./livekit_models").TrackType | undefined;
                    name?: string | undefined;
                    muted?: boolean | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    simulcast?: boolean | undefined;
                    disableDtx?: boolean | undefined;
                    source?: import("./livekit_models").TrackSource | undefined;
                    layers?: {
                        quality?: import("./livekit_models").VideoQuality | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                        bitrate?: number | undefined;
                        ssrc?: number | undefined;
                    }[] | undefined;
                    mimeType?: string | undefined;
                    mid?: string | undefined;
                    codecs?: {
                        mimeType?: string | undefined;
                        mid?: string | undefined;
                        cid?: string | undefined;
                        layers?: {
                            quality?: import("./livekit_models").VideoQuality | undefined;
                            width?: number | undefined;
                            height?: number | undefined;
                            bitrate?: number | undefined;
                            ssrc?: number | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    stereo?: boolean | undefined;
                    disableRed?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_88 in Exclude<keyof I["ingressInfo"]["state"], keyof import("./livekit_ingress").IngressState>]: never; }) | undefined;
        } & { [K_89 in Exclude<keyof I["ingressInfo"], keyof IngressInfo>]: never; }) | undefined;
        track?: ({
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: import("./livekit_models").TrackSource | undefined;
            layers?: {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] | undefined;
            mimeType?: string | undefined;
            mid?: string | undefined;
            codecs?: {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
        } & {
            sid?: string | undefined;
            type?: import("./livekit_models").TrackType | undefined;
            name?: string | undefined;
            muted?: boolean | undefined;
            width?: number | undefined;
            height?: number | undefined;
            simulcast?: boolean | undefined;
            disableDtx?: boolean | undefined;
            source?: import("./livekit_models").TrackSource | undefined;
            layers?: ({
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[] & ({
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            } & { [K_90 in Exclude<keyof I["track"]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_91 in Exclude<keyof I["track"]["layers"], number | keyof {
                quality?: import("./livekit_models").VideoQuality | undefined;
                width?: number | undefined;
                height?: number | undefined;
                bitrate?: number | undefined;
                ssrc?: number | undefined;
            }[]>]: never; }) | undefined;
            mimeType?: string | undefined;
            mid?: string | undefined;
            codecs?: ({
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[] & ({
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            } & {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] & ({
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                } & { [K_92 in Exclude<keyof I["track"]["codecs"][number]["layers"][number], keyof import("./livekit_models").VideoLayer>]: never; })[] & { [K_93 in Exclude<keyof I["track"]["codecs"][number]["layers"], number | keyof {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_94 in Exclude<keyof I["track"]["codecs"][number], keyof import("./livekit_models").SimulcastCodecInfo>]: never; })[] & { [K_95 in Exclude<keyof I["track"]["codecs"], number | keyof {
                mimeType?: string | undefined;
                mid?: string | undefined;
                cid?: string | undefined;
                layers?: {
                    quality?: import("./livekit_models").VideoQuality | undefined;
                    width?: number | undefined;
                    height?: number | undefined;
                    bitrate?: number | undefined;
                    ssrc?: number | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            stereo?: boolean | undefined;
            disableRed?: boolean | undefined;
        } & { [K_96 in Exclude<keyof I["track"], keyof TrackInfo>]: never; }) | undefined;
        id?: string | undefined;
        createdAt?: number | undefined;
    } & { [K_97 in Exclude<keyof I, keyof WebhookEvent>]: never; }>(object: I): WebhookEvent;
};
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
