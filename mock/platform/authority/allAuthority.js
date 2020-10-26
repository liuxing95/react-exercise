import { delay } from 'roadhog-api-doc';


const jsonData = {
  result: [
    {
      "id": "482113491504779264",
      "permission_code": "nestle.ms.navi",
      "permission_name": "导航管理",
      "uri": "",
      "type": 2,
      "status": 1,
      "rank": 100,
      "parent_id": null,
      "parent_ids": null,
      "remark": "",
      "extend_field": null,
      "is_parent": true,
      "children": [
        {
          "id": "482113491504779265",
          "permission_code": "nestle.ms.navi.url",
          "permission_name": "链接管理",
          "uri": "/nav-url",
          "type": 2,
          "status": 1,
          "rank": 127,
          "parent_id": "482113491504779264",
          "parent_ids": "482113491504779264",
          "remark": "",
          "extend_field": null,
          "is_parent": true,
          "children": [
            {
              "id": "482113491504779266",
              "permission_code": "nestle.ms.navi.url.add",
              "permission_name": "添加",
              "uri": "/nav-url/add",
              "type": 2,
              "status": 1,
              "rank": 127,
              "parent_id": "482113491504779265",
              "parent_ids": "482113491504779264,482113491504779265",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            },
            {
              "id": "482113491504779267",
              "permission_code": "nestle.ms.navi.url.object",
              "permission_name": "详情",
              "uri": "/nav-url/object",
              "type": 2,
              "status": 1,
              "rank": 127,
              "parent_id": "482113491504779265",
              "parent_ids": "482113491504779264,482113491504779265",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            }
          ]
        }
      ]
    },
    {
      "id": "482116699655503872",
      "permission_code": "nestle.ms.upms",
      "permission_name": "权限管理",
      "uri": null,
      "type": 2,
      "status": 1,
      "rank": 127,
      "parent_id": null,
      "parent_ids": null,
      "remark": "",
      "extend_field": null,
      "is_parent": true,
      "children": [
        {
          "id": "482116699655503873",
          "permission_code": "nestle.ms.upms.user",
          "permission_name": "账号管理",
          "uri": "/user",
          "type": 2,
          "status": 1,
          "rank": 1,
          "parent_id": "482116699655503872",
          "parent_ids": "482116699655503872",
          "remark": "",
          "extend_field": null,
          "is_parent": true,
          "children": [
            {
              "id": "482116699655503874",
              "permission_code": "nestle.ms.upms.user.add",
              "permission_name": "创建账号",
              "uri": "/user/add",
              "type": 2,
              "status": 1,
              "rank": 1,
              "parent_id": "482116699655503873",
              "parent_ids": "482116699655503872,482116699655503873",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            },
            {
              "id": "482116699655503875",
              "permission_code": "nestle.ms.upms.user.delete",
              "permission_name": "删除账号",
              "uri": "/user/delete",
              "type": 2,
              "status": 1,
              "rank": 2,
              "parent_id": "482116699655503873",
              "parent_ids": "482116699655503872,482116699655503873",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            },
            {
              "id": "482116699655503876",
              "permission_code": "nestle.ms.upms.user.update",
              "permission_name": "编辑账号",
              "uri": "/user/update",
              "type": 2,
              "status": 1,
              "rank": 3,
              "parent_id": "482116699655503873",
              "parent_ids": "482116699655503872,482116699655503873",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            },
            {
              "id": "482116699655503877",
              "permission_code": "nestle.ms.upms.user.object",
              "permission_name": "查看账号",
              "uri": "/user/object",
              "type": 2,
              "status": 1,
              "rank": 4,
              "parent_id": "482116699655503873",
              "parent_ids": "482116699655503872,482116699655503873",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            }
          ]
        },
        {
          "id": "482116699655503878",
          "permission_code": "nestle.ms.upms.role",
          "permission_name": "角色管理",
          "uri": "/role",
          "type": 2,
          "status": 1,
          "rank": 2,
          "parent_id": "482116699655503872",
          "parent_ids": "482116699655503872",
          "remark": "",
          "extend_field": null,
          "is_parent": true,
          "children": [
            {
              "id": "482116699655503879",
              "permission_code": "nestle.ms.upms.role.add",
              "permission_name": "创建角色",
              "uri": "/role/add",
              "type": 2,
              "status": 1,
              "rank": 1,
              "parent_id": "482116699655503878",
              "parent_ids": "482116699655503872,482116699655503878",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            },
            {
              "id": "482116699655503880",
              "permission_code": "nestle.ms.upms.role.delete",
              "permission_name": "删除角色",
              "uri": "/role/delete",
              "type": 2,
              "status": 1,
              "rank": 2,
              "parent_id": "482116699655503878",
              "parent_ids": "482116699655503872,482116699655503878",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            },
            {
              "id": "482116699655503881",
              "permission_code": "nestle.ms.upms.role.update",
              "permission_name": "编辑角色",
              "uri": "/role/update",
              "type": 2,
              "status": 1,
              "rank": 3,
              "parent_id": "482116699655503878",
              "parent_ids": "482116699655503872,482116699655503878",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            },
            {
              "id": "482116699655503882",
              "permission_code": "nestle.ms.upms.role.object",
              "permission_name": "查看角色",
              "uri": "/role/object",
              "type": 2,
              "status": 1,
              "rank": 4,
              "parent_id": "482116699655503878",
              "parent_ids": "482116699655503872,482116699655503878",
              "remark": "",
              "extend_field": null,
              "is_parent": false,
              "children": null
            }
          ]
        }
      ]
    }
  ],
  'error_info': null,
  'is_success': true,
};

const Api = {
  'GET /platform/authority/allAuthority': (req, res) => {
    const { platform_token } = req.headers;
    if (platform_token && platform_token !== 'null') {
      res.send(JSON.stringify(jsonData));
    } else {
      const errorInfo = '获取权限列表失败';
      res.send(JSON.stringify(errorInfo));
    }
  },
};
export default delay(Api, 500);


