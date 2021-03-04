import React from "react";
import { create, findByType } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Input should not be displayed after creation", () => {
        const component = create(<ProfileStatus status="Jedi/Samurai" />);
        const root = component.root;

        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test("Span should be displayed with status after creation", () => {
        const component = create(<ProfileStatus status="Jedi/Samurai" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("Jedi/Samurai");
    });

    test("Input should be displayed in EditMode instead of span", () => {
        const component = create(<ProfileStatus status="Jedi/Samurai" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");

        expect(input.props.value).toBe("Jedi/Samurai");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"CyberSamurai"} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
