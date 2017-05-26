import TabPane from './tabPane.jsx';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })

class TabContent extends Component {
  static propTypes = {
    panels: PropTypes.object,
    activeIndex: PropTypes.number,
    isActive: PropTypes.bool
  };

  getTabPanes() {
    const { activeIndex, panels, isActive } = this.props;

    return panels.map((child) => {
      if(!child) { return; }

      const order = parseInt(child.props.order,10);
      const isActive = activeIndex === order;

      return React.cloneElement(child, {
        isActive,
        children: child.props.children,
        key: `tabpane-${order}`
      });
    });
  }

  render() {
    const classes = classnames({
      content: true
    });

    return (
      <div styleName={classes}>
        {this.getTabPanes()}
      </div>
    )
  }
}
export default TabContent;
