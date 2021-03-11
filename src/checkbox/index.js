import React, { Children, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Checkbox as AWDSCheckbox } from '@academicwork/awds-tsx/core'

export const refUpdater = ({ checked, indeterminate }) => input => {
  if (input) {
    input.checked = checked
    input.indeterminate = indeterminate
  }
}

class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
  }

  render() {
    const { checked, indeterminate = false, onChange, disabled, readOnly, ...rest } = this.props

    const isDisabled = disabled || readOnly

    console.log(this.props)

    return (
      <AWDSCheckbox
        type="checkbox"
        ref={refUpdater({ checked, indeterminate })}
        indeterminate={indeterminate}
        checked={checked}
        onChange={onChange}
        disabled={isDisabled}
        {...rest}
      />
    )
  }
}

export default Checkbox
