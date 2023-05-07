declare module '*.jpg' {
    const value: any;
    export default value;
}
declare module '*.mp4' {
    const value: string;
    export default value;
}

declare module '*.module.css' {
    const value: any;
    export default value;
}

declare module '*.png' {
    const value: any;
    export default value;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}