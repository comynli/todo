from m import Router, Application
from m.utils import jsonfy


class Storage:
    def __init__(self):
        self.next_id = 0
        self.todos = []

    def add(self, content):
        id = self.next_id
        self.todos.append({'id': id, 'content': content, 'done': False})
        self.next_id += 1
        return id

    def done(self, id):
        for todo in self.todos:
            if todo['id'] == id:
                todo['done'] = True
                break

    def reopen(self, id):
        for todo in self.todos:
            if todo['id'] == id:
                todo['done'] = False
                break

    def list(self, filter='todo'):
        if filter == 'todo':
            return [t for t in self.todos if not t['done']]
        return self.todos

router = Router('/api/todo')


@router.route('', methods=['POST'])
def add(ctx, request):
    content = request.json()['content']
    id = ctx.storage.add(content)
    return jsonfy(code=200, id=id)


@router.route('/{filter:str}', methods=['GET'])
def list(ctx, request):
    filter = request.args.get('filter')
    todos = ctx.storage.list(filter)
    return jsonfy(code=200, todos=todos)


@router.route('/{id:int}/done', methods=['PUT'])
def done(ctx, request):
    id = request.args.get('id')
    ctx.storage.done(id)
    return jsonfy(code=200, id=id)


@router.route('/{id:int}/reopen', methods=['PUT'])
def reopen(ctx, request):
    id = request.args.get('id')
    ctx.storage.reopen(id)
    return jsonfy(code=200, id=id)


app = Application([router], storage=Storage())


if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    server = make_server('0.0.0.0', 8080, app)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()