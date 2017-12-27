import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import JqxGrid, { jqx } from 'jqwidgets-react/react_jqxgrid';
import IncidentQueueToolbar from 'components/ims/IncidentQueueToolbar.jsx';

class IncidentQueue extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUnmount() {
        clearInterval(this.longpulling);
    }
    componentDidMount() {
        let incident_queue_grid = this.control_panel_incident_queue;
        let incident_queue_source = incident_queue_grid.source()._source;
        incident_queue_grid.on('sort', (event) => {
            save_grid_state();
        });

        incident_queue_grid.on('filter', (event) => {
            incident_queue_grid.updatebounddata('filter');
            // console.log('filter');
            save_grid_state();
            // let incident_queue_source = incident_queue_grid.source()._source;
            // let incident_queue_filters = event.args.filters;
            // for(let i=0; i<incident_queue_filters.length; i++) {
            //     if(incident_queue_filters[i].datafield == 'priority') {
            //         incident_queue_source.data.limit = JSON.stringify([{type:"list", value:"8982", field:"priority"}]);
            //         // incident_queue_grid.setOptions({ source: new jqx.dataAdapter(incident_queue_source)});
            //     }
            // }
        });

        incident_queue_grid.on('pagesizechanged', (event) => {
            incident_queue_grid.updatebounddata('pagesizechanged');
            // console.log('pagesizechanged');
            save_grid_state();
            // incident_queue_source.data.start = event.args.recordstartindex;
            // incident_queue_source.data.limit = event.args.recordendindex;
            // incident_queue_source.data.page = event.args.pagenum;
            // incident_queue_grid.setOptions({ source: new jqx.dataAdapter(incident_queue_source)});
        });

        incident_queue_grid.on('pagechanged', (event) => {
            console.log('pagechanged');
            incident_queue_grid.updatebounddata('pagechanged');
            // incident_queue_source.data.start = event.args.recordstartindex;
            // incident_queue_source.data.limit = event.args.recordendindex;
            // incident_queue_source.data.page = event.args.pagenum;
            // incident_queue_grid.setOptions({ source: new jqx.dataAdapter(incident_queue_source)});
        });

        incident_queue_grid.on('columnreordered', (event) => {
            // console.log('columnreordered');
            save_grid_state();
        });

        incident_queue_grid.on('columnresized', (event) => {
            // console.log('columnresized');
            save_grid_state();
        });

        let save_grid_state = function () {
            // console.log(incident_queue_grid.getstate());
        }

        let last_updated_time = '';
        this.longpulling = setInterval(function () {
            $.ajax({
                url: "https://dev1.isscommand.com/index.php/TRAINING/IncidentQueue/get_new_updated_incidents",
                type: "POST",
                data: {
                    INCItemsPerPage: incident_queue_source.pagesize,
                    facility_id: incident_queue_source.data.facility_id,
                    event_id: incident_queue_source.data.event_id,
                    current_page: incident_queue_source.pagenum,
                    sort: '[{"property":"incident_num","direction":"DESC","root":"data","transform":null,"sort":null}]',
                    value: JSON.stringify([{ checkbox: "New,Dispatched,Onscene,Closed" }]),
                    date_value: 0,
                    smart_filter: JSON.stringify([]),
                    active_time: last_updated_time,
                    find_index_php: 0,
                },
                success: function (result) {
                    result = $.parseJSON(result);
                    if (result.count) {
                        let updated_rows_count = result.rows.length;
                        let record_to_modify_index = -1;
                        let grid_information;
                        for (let i = 0; i < updated_rows_count; i++) {
                            record_to_modify_index = incident_queue_grid.getrowboundindexbyid(result.rows[i].id);
                            if (record_to_modify_index != -1) {
                                incident_queue_grid.updaterow(result.rows[i].id, result.rows[i]);
                            } else {
                                // grid_information = incident_queue_grid.getdatainformation();
                                // if(grid_information.rowscount = grid_information.paginginformation.pagesize) {
                                //     incident_queue_grid.deleterow(incident_queue_grid.getrowid(0));
                                // }
                                incident_queue_grid.addrow(result.page[result.rows[i].id].index, result.rows[i]);
                            }
                            last_updated_time = result.rows[i].last_updated_on;
                        }
                        incident_queue_grid._total = result.page.pagin_total;
                    } else if (result.rows_total) {
                        let updated_rows_count = result.rows_total.length;
                        for (let i = 0; i < updated_rows_count; i++) {
                            incident_queue_grid.deleterow(result.rows_total[i].id);
                        }
                    }
                }
            });
        }, 7000);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.facility_id && nextProps.event_id) {
            let control_panel_incident_queue_source = this.control_panel_incident_queue.source()._source;
            control_panel_incident_queue_source.data.facility_id = nextProps.facility_id;
            control_panel_incident_queue_source.data.event_id = nextProps.event_id;
            this.control_panel_incident_queue.setOptions({ source: new jqx.dataAdapter(control_panel_incident_queue_source)});
        }
        return false
    }
    
    render() {
        let rendertoolbar = (toolbar) => {
            toolbar.append('<div id="incident_queue_toolbar"></div>');
            ReactDOM.render(<IncidentQueueToolbar></IncidentQueueToolbar>, document.getElementById('incident_queue_toolbar'), () => {
                let incident_queue_grid = this.control_panel_incident_queue;

                $('#incident_queue_filter_apply_button').click(function () {
                    let status_checkbox = $('[name="incident_queue_status_chekbox"]');
                    let selected_status = [];
                    for (let i = 0; i < status_checkbox.length; i++) {
                        if (status_checkbox[i].checked) {
                            selected_status.push(status_checkbox[i].value);
                        }
                    }
                    let value = [{ 'checkbox': selected_status.join() }];
                    incident_queue_grid.refreshdata();
                });
            });
        }

        let priority_data_adapter = jqx.dataAdapter({
            autoBind: true,
            dataType: 'json',
            root: 'rows',
            dataFields: [
                { name: 'priority_ids', type: 'string' },
                { name: 'priority', type: 'string' }
            ],
            url: 'https://dev1.isscommand.com/index.php/Ims/IncidentQueue/get_priority_list_filter/',
            data: {
                selected_facility: 4103,
            },
        });

        let cellclassname = function (row, column, value, data) {
            if (data.incident_status == 3) {
                return 'closed'
            } else if (data.incident_status == 2) {
                return 'onscene'
            } else if (data.incident_status == 1) {
                return 'dispached'
            } else {
                return 'new'
            }
        }

        return (
            <div>
                <div style={{border:'1px solid #aaaaaa'}}>
                    <JqxGrid ref={(JqxGrid)=>{this.control_panel_incident_queue = JqxGrid}}
                        width={"100%"}
                        height={window.innerHeight-30-20-35}
                        autoloadstate={true}
                        showtoolbar={true}
                        rendertoolbar={rendertoolbar}
                        toolbarheight={29}
                        sortable={true}
                        columnsresize={true}
                        columnsautoresize={true}
                        columnsreorder={true}
                        editable={true}
                        filterable={true}
                        enabletooltips={true}
                        pageable={true}
                        pagermode={"advanced"}
                        pagesize={20}
                        pagesizeoptions={['20', '100', '500', '1000', '5000', '10000']}
                        enableanimations={false}
                        style={{ border: 'none' }}
                        columns={[
                            { datafield: "incident_no", text: "#", width: "5%", cellclassname: cellclassname, editable: false },
                            {
                                datafield: "notes_narrative_data", text: "<img src='public/images/notes_add.png' class='img' />", align: 'center', width: '2%', sortable: false, editable: false, cellclassname: cellclassname, menu: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    if (value) {
                                        return '<img src="public/images/notes_edit.png" class="img grid_image_icon" />';
                                    }
                                    return '<img src="public/images/notes_add.png" class="img grid_image_icon" />';
                                }
                            },
                            {
                                datafield: "starred", text: "<img src='public/images/star.png' class='img' />", align: 'center', width: '2%', cellclassname: cellclassname, editable: false, menu: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    if (value == '1') {
                                        return '<img src="public/images/star.png" class="img grid_image_icon" />';
                                    }
                                    return '<img src="public/images/star-empty.png" class="img grid_image_icon" />';
                                },
                            },
                            {
                                datafield: "media", text: "<img src='public/images/pictures.png' class='img' />", align: 'center', cellalign: 'center', width: '2%', cellclassname: cellclassname, editable: false, menu: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    if (value) {
                                        return '<img src="public/images/pictures.png" class="img grid_image_icon" />';
                                    }
                                    return defaulthtml
                                }
                            },
                            {
                                datafield: "priority", text: "Priority", width: '8%', columntype: 'combobox', filtertype: 'checkedlist', cellclassname: cellclassname,
                                createeditor: (row, cellvalue, editor) => {
                                    editor.jqxComboBox({
                                        valueMember: 'priority_ids',
                                        displayMember: 'priority',
                                        source: priority_data_adapter
                                    })
                                }
                            },
                            { datafield: "incident_name", text: "Incident Type", width: '10%', columntype: 'combobox', sorable: false, cellclassname: cellclassname, },
                            { datafield: "dept_assignto_name_org", text: "Department", width: '8%', sortable: false, cellclassname: cellclassname, editable: false },
                            { datafield: "assigned_to", text: "Assigned to", width: '8%', sortable: false, cellclassname: cellclassname, editable: false },
                            { datafield: "location", text: "Location", width: '9%', sortable: false, cellclassname: cellclassname, editable: false },
                            { datafield: "person_reporting", text: "Person Reporting", width: '8%', sortable: false, cellclassname: cellclassname, editable: false },
                            { datafield: "created_by", text: "Created By", width: '7%', sortable: false, cellclassname: cellclassname, editable: false },
                            { datafield: "org_created_time", text: "Created", width: '6%', align: 'center', cellclassname: cellclassname, editable: false },
                            {
                                datafield: "org_dispatch_time", text: "Dispatch", width: '6%', align: 'center', cellclassname: cellclassname, editable: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    if (value) {
                                        return defaulthtml;
                                    }
                                    return '<center><img src="public/images/clock.gif" class="img grid_image_icon" /></center>';
                                }
                            },
                            {
                                datafield: "org_onscened_time", text: "Onscene", width: '6%', align: 'center', cellclassname: cellclassname, editable: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    if (value) {
                                        return defaulthtml;
                                    }
                                    return '<center><img src="public/images/clock.gif" class="img grid_image_icon" /></center>';
                                }
                            },
                            {
                                datafield: "org_close_time", text: "Closed", width: '6%', align: 'center', cellclassname: cellclassname, editable: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    if (value) {
                                        return defaulthtml;
                                    }
                                    return '<center><img src="public/images/clock.gif" class="img grid_image_icon" /></center>';
                                }
                            },
                            { datafield: "is_linked", text: "Link", width: '3%', cellclassname: cellclassname, editable: false },
                            {
                                datafield: "has_comment", text: '<img src="public/images/comments_dotted.png" class="img" />', align: 'center', width: '2%', sortable: false, cellclassname: cellclassname, editable: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    if (value) {
                                        return '<img src="public/images/comments_dotted.png" class="img grid_image_icon" />';
                                    }
                                    return '<img src="public/images/comments_add.png" class="img grid_image_icon" />';
                                }
                            },
                            {
                                text: '<img src="public/images/delete.png" class="img" />', align: 'center', width: '2%', sortable: false, cellclassname: cellclassname, editable: false,
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
                                    return '<img src="public/images/delete.png" class="img grid_image_icon" />';
                                }
                            },
                        ]}
                        source={
                            new jqx.dataAdapter({
                                autoBind: true,
                                dataType: 'json',
                                id: 'id',
                                sortcolumn: 'id',
                                sortdirection: 'desc',
                                dataFields: [
                                    { name: 'id', type: 'string' },
                                    { name: 'incident_no', type: 'string' },
                                    { name: 'incident_type_id', type: 'string' },
                                    { name: 'incident_name', type: 'string', },
                                    { name: 'department_id', type: 'string' },
                                    { name: 'dept_assignto_name_org', type: 'string' },
                                    { name: 'incident_status', type: 'string' },
                                    { name: 'created_by', type: 'string' },
                                    { name: 'org_created_time', type: 'string' },
                                    { name: 'org_dispatch_time', type: 'string' },
                                    { name: 'org_onscened_time', type: 'string' },
                                    { name: 'org_close_time', type: 'string' },
                                    { name: 'notes_narrative_data', type: 'string' },
                                    { name: 'priority', type: 'string', },
                                    { name: 'starred', type: 'string' },
                                    { name: 'media', type: 'string' },
                                    { name: 'has_comment', type: 'string' },
                                    { name: 'current_active_time', type: 'string' },
                                ],
                                url: 'https://dev1.isscommand.com/index.php/Ims/IncidentQueue/load_incident_queue',
                                data: {
                                    facility_id: this.props.facility_id,
                                    event_id: this.props.event_id,
                                    value: '[{"checkbox":"New,Dispatched,Onscene,Closed"}]',
                                    date_value: 0,
                                    page: 1,
                                    start: 0,
                                    limit: 20,
                                    sort: '[{"property":"incident_num","direction":"DESC"}]'
                                },
                                root: 'rows',
                                totalrecords: 'results',
                                beforeprocessing: function (data) {
                                    this.totalrecords = data.results;

                                    let last_updated_time = '';
                                    if (data.rows !== null && data.rows.length) {
                                        last_updated_time = data.rows[0].current_active_time;
                                    }
                                    else{
                                        data.rows = [];
                                    }
                                },
                            })
                        }
                    />
                </div>
                <div id='incident_details_page_id'></div>
            </div>
        )
    }
}
export default IncidentQueue;