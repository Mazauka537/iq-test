import type {Component} from "vue";

export type TRouteMeta = {
    footer?: Component,
    headerText?: string,
    headerSize?: 'sm' | 'lg'
}