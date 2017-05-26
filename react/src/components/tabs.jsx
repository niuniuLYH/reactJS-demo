import TabContent from './tabContent.jsx';
import TabNav from './tabNav.jsx';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })

class Tabs extends Component {
  static propTypes = {
   children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
   ]),
    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange:() => {}
  };

  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
    this.immChildren = Seq(currProps.children);

    const currProps = this.props;

    let activeIndex;
    if('activeIndex' in currProps) {
      activeIndex = currProps.activeIndex;
    }else if('defaultActiveIndex' in currProps) {
      activeIndex = currProps.defaultActiveIndex;
    }

    this.state = {
      activeIndex,
      preIndex: activeIndex
    };
  }

  componentWillReceiveProps(nextProps) {
    if('activeIndex' in nextProps) {
      this.setState({
        activeIndex: nextProps.activeIndex,
      });
    }
  }

  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex;

    if(this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex,
      });

      this.props.onChange({ activeIndex,preIndex });
    }
  }

  renderTabNav() {
    return (
      <TabNav key="tabcontent" activeIndex={this.state.activeIndex} panels={this.immChildren}></TabNav>
    )
  }

  renderTabContent() {
    return (
      <TabContent
        key="tabcontent"
        activeIndex={this.state.activeIndex}
        panels={this.immChildren}
        />
    );
  }

  render() {
    const { className } = this.props;

    const classes = classnames(
      className,'ui-tabs'
    );

    return (
      <div className={classes}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    )
  }
}
export default Tabs;
