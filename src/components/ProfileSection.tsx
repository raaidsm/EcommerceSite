import "./ProfileSection.css";
import {DragEventHandler, FC, useRef} from "react";

const ProfileSection: FC = props => {
    const profileSectionDiv: any = useRef(null);

    const onDragOver: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        const dragging = document.querySelector(".dragging");
        const afterElement: Element = getDraggableAfterElement(profileSectionDiv.current, event.clientY);
        if (afterElement === undefined) profileSectionDiv.current.appendChild(dragging);
        else profileSectionDiv.current.insertBefore(dragging, afterElement);
    };

    const getDraggableAfterElement = (container: HTMLDivElement, y: number) : Element => {
        const draggableElements: Element[] = [...container.querySelectorAll(".draggable:not(.dragging)")];

        interface AfterElementReducerResult {
            offset: number;
            previousElement?: Element
        }

        const afterElement: Element | undefined = draggableElements.reduce((previousResult: AfterElementReducerResult, currentElement: Element) => {
            const box: DOMRect = currentElement.getBoundingClientRect();
            const offset: number = y - box.top - box.height / 2;
            if (offset < 0 && offset > previousResult.offset) {
                return { offset: offset, previousElement: currentElement };
            }
            else {
                return previousResult
            }
        }, { offset: Number.NEGATIVE_INFINITY }).previousElement;

        return afterElement!;
    };

    return <div>
        <h3>User Profiles</h3>
        <div ref={profileSectionDiv} className="profile-section" onDragOver={onDragOver}>
            {props.children}
        </div>
    </div>;
}

export default ProfileSection;