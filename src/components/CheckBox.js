import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { refType } from '@material-ui/utils';
import SwitchBase from '../internal/SwitchBase';
import CheckBoxOutlineBlankIcon from '../internal/svg-icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '../internal/svg-icons/CheckBox';
import { fade } from '../styles/colorManipulator';
import IndeterminateCheckBoxIcon from '../internal/svg-icons/IndeterminateCheckBox';
import capitalize from '../utils/capitalize';
import withStyles from '../styles/withStyles';

 class App extends Component {
    constructor(props) {
        this.handleCheck = this.handleCheck.bind(this);
        super(props);
        this.state = {
        checkedValues: []
        }
    }
    handleCheck(e,x) {
        this.setState(state => ({
        checkedValues: state.checkedValues.includes(x)
            ? state.checkedValues.filter(c => c !== x)
            : [...state.checkedValues, x]
        }));
    }

    render() {
        return (<div>
        { this.state.data.map(x =>
            <Checkbox
            label={x} key={x.toString()}
            onChange={e => this.handleCheck(e,x)}
            checked={this.state.checkedValues.includes(x)}
            />
        )}}
        </div>)
    }
}