/*
 * MinIO Cloud Storage (C) 2020 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import { connect } from "react-redux"
import * as actionsObjects from "./actions"

export const ObjectsSearch = ({ onChange }) => (
  <div
    className="input-group ig-left ig-search-dark"
    style={{ display: "block" }}
  >
    <input
      className="ig-text"
      type="input"
      placeholder="请输入搜索内容"
      onChange={e => onChange(e.target.value)}
    />
    <i className="ig-helpers" />
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onChange: filter =>
      dispatch(actionsObjects.setFilter(filter))
  }
}

export default connect(undefined, mapDispatchToProps)(ObjectsSearch)
