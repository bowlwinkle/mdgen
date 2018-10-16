module.exports = {
    "type": "object",
    "properties": {
        "read": {
            "type": "object",
            "properties":{
                "excludeTables": {
                    "type": "boolean"
                },
                "frequency": {
                    "type": "integer",
                    "faker": "random.number"
                },
                "host": {
                    "type": "string",
                    "faker": "internet.url"
                },
                "password": {
                    "type": "string",
                    "faker": "random.word"
                },
                "port": {
                    "type": "string",
                    "pattern": "3000|3001|3005|500"
                },
                "query": {
                    "type": "string",
                    "faker": "random.words"
                },
                "sequenceColumn": {
                    "type": "string",
                    "faker": "database.column"
                },
                "sid": {
                    "type": "string",
                    "faker": "random.word"
                },
                "tables": {
                    "type": "array",
                    "minItems": 15,
                    "items": {"faker": "random.word"}
                },
                "updateColumn": {
                    "type": "string",
                    "faker": "database.column"
                },
                "user": {
                    "type": "string",
                    "faker": "random.name"
                }
            },
            "required": ["sid", "excludeTables", "host"]
        }
    },
    "required": ["read"]
};