
import React from 'react';
import { Image } from 'primereact/image';

export interface IProps {
    imageSrc: string;
}

export const UploadImageComponent: React.FC<IProps> = (props) => {
    return (
        <div>
            <div className="card">
                <Image id={"ImageUniqueId"} src={props.imageSrc} alt="Image" width="410" preview />
            </div>
        </div>
    )
}
