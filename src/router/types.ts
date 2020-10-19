import type { EventEmitter } from '../event-emitter/types';
type Handler = EventEmitter.Handler;

export namespace Router {
  export interface API extends EventEmitter.API {
    back(): void;
    destroy(): void;
    forward(): void;
    getCurrentRoute(): Router.RouteData | null;
    go(num: number): void;
    push(name: string, params: RouteParams): void;
    register(name: string, path: string): true | null;
    replace(name: string, params: RouteParams): void;
  }

  export interface CurrentRoute {
    params: any;
    route: Route;
  }

  export interface EventHandlers {
    change: Handler[];
    enter: Handler[];
    exit: Handler[];
  }

  export enum Events {
    Enter = 'Enter',
    Exit = 'Exit',
  }

  export interface Route {
    decodeURL(url: string): null | RouteParams;
    encodeURL(dict: RouteParams): string;
    handlers: EventHandlers;
    name: string;
  }

  export interface RouteData {
    name: string;
    params: any;
  }

  export type Routes = Record<string, Route>;

  export type RouteParams = Record<string, string | null | string[]>;
}