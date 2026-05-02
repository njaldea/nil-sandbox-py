import nil_clix
# import nil_gate

import serve

import sys

def main():
    def root_node_exec(option: nil_clix.Options):
        if (option.flag("help")):
            print(option.help()[:-1])
            return 0

        serve.serve(option.number("port"))
        print()
        return 0

    node = nil_clix.create_node()
    node.flag("help", "h", "show this help")
    node.number("port", "p", "use as port", fallback=0)
    node.use(root_node_exec)
    return node.run(sys.argv[1:])

if "__main__" == __name__:
    sys.exit(main())