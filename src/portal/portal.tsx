import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface PortalProps {
  children: any;
  root: any;
}

// Let's create a Modal component that is an abstraction around
// the portal API.
export class Portal extends React.Component<PortalProps> {
  private container: HTMLElement;

  constructor(props: PortalProps) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.container = document.createElement('div');
  }

  public componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    this.props.root.appendChild(this.container);
  }

  public componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    this.props.root.removeChild(this.container);
  }

  public render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.container
    );
  }
}
