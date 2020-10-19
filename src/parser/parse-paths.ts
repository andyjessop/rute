import { parseSegment } from './parse-segment';
import { RouteParams } from './config/types';

export function parsePaths(targets : string[]) {
  const parsers = targets.map(parseSegment);

  return function curriedParsePaths(path : string[], params : RouteParams) {
    if (targets.length !== path.length) {
      return false;
    }

    for (let i = 0; i < targets.length; i++) {
      if (!parsers[i](path[i], params)) {
        return false;
      }
    }

    return true;
  };
}
