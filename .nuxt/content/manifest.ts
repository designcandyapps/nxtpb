export const checksums = {
  "projects_en": "v3.5.0--m9qfrabQiJIbXWXl3r2IrOsTWNrNx_Dvs7mkpHzxz04",
  "projects_th": "v3.5.0--T5qCnWNHnbO19YDGtDM3HlPQdvoyWnKA9JI71OqnQNg"
}
export const checksumsStructure = {
  "projects_en": "UcAXH9uF1gPiWgWRHGRj8vLCn7LyRWcDIQiorfJuT6I",
  "projects_th": "zD3-VShu4v16T4sqq9aIpEKu0zF02ebMc5EZNPJtzjo"
}

export const tables = {
  "projects_en": "_content_projects_en",
  "projects_th": "_content_projects_th",
  "info": "_content_info"
}

export default {
  "projects_en": {
    "type": "data",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "title": "string",
      "description": "string",
      "date": "string",
      "image": "string",
      "githubURL": "string",
      "technologies": "json",
      "wip": "boolean",
      "featured": "boolean"
    }
  },
  "projects_th": {
    "type": "data",
    "fields": {
      "id": "string",
      "stem": "string",
      "extension": "string",
      "meta": "json",
      "title": "string",
      "description": "string",
      "date": "string",
      "image": "string",
      "githubURL": "string",
      "technologies": "json",
      "wip": "boolean",
      "featured": "boolean"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}