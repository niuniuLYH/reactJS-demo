
@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })

class InkBar extends Component {
  static propTypes = {
    left: PropTypes.number,
    width: PropTypes.number
  };

  render() {
    const { left, width } = this.props;

    const classes = classnames({
      inkBar: true
    });

    return (
      <div styleName={classes} style={{
        webkitTransform: `translate3d(${left}px,0,0)`,
        transform: `translate3d(${left}px,0,0)`,
        width: width
      }}>
      </div>
    )
  }
}
export default InkBar;
