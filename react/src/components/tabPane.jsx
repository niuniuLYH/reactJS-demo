
@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })

class TabPane extends Component {
  static propTypes = {
    tab: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]).isRequired,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    isActive: PropTypes.bool
  };

  render(){
    const { className, isActive, children } = this.props;

    const classes = classnames({
      panel: true,
      contentActive: isActive,
    });

    return (
      <div role="tabPanel" styleName={classes} aria-hidden={!isActive}>
        {children}
      </div>
    )
  }
}
export default TabPane;
