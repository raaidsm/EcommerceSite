import "./Profile.css"
import {DragEventHandler, FC, useState} from "react";

interface ProfileProps {
    name: string;
    age: number;
    description: string;
}

const Profile: FC<ProfileProps> = (props: any) => {
    const [classNames, setClassNames] = useState(" profile draggable");

    const onDragStart: DragEventHandler<HTMLDivElement> = () => {
        setClassNames(classNames + " dragging");
    };

    const onDragEnd: DragEventHandler<HTMLDivElement> = () => {
        let tempClassNames = classNames;
        tempClassNames = tempClassNames.replace(" dragging", "");
        setClassNames(tempClassNames);
    };

    return <div
    className={classNames}
    draggable="true"
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Description: {props.description}</p>
    </div>;
}

export default Profile;