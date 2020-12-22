const testData = {
    '4-7 z': 'zzzfzlzzz',
    '3-4 l': 'blllk',
    '8-11 j': 'jjjjjjjgjjjj',
    '6-7 l': 'lllhlbl',
    '10-13 x': 'xmhfsbjxptxxv',
    '2-3 s': 'ssvxszrvj',
    '4-6 r': 'rtrrrqv',
    '5-6 c': 'cbccxc',
    '3-4 g': 'zwvg',
    '2-4 d': 'fqfqlcdzbtmph',
    '10-13 s': 'cmssgslvrssfsl',
    '1-4 d': 'hdsdddq',
    '2-5 d': 'jdptwdv',
    '3-4 l': 'vlcl',
    '2-5 k': 'mdkkkmkq',
    '3-4 j': 'wjjt',
    '4-10 h': 'wmfqghskgjtt',
    '8-9 c': 'cccccccnp',
    '4-5 q': 'qqjzm',
    '5-16 h': 'hhhhhhhhhhhhhhhhhhh',
    '11-14 g': 'vghggggggggggwggggbg',
    '1-13 s': 'ssssssssssdsxss',
    '3-6 x': 'bxlxxznq',
    '16-17 f': 'hfwfqffffwsffsffl',
    '12-14 v': 'rbvvgvvwvvvvcvjv',
    '6-8 r': 'rrfrrrrr',
    '4-13 j': 'wsbmtjhjtpmljjfbk',
    '2-7 k': 'pzdwgnknf',
    '14-18 f': 'tsdqbvgbxwvfhfffpn',
    '4-13 c': 'vxpccvfhcnvscrtngc',
    '1-2 z': 'nmbzcz',
    '4-6 k': 'wkvfcgpsnk',
    '1-4 m': 'smppnnmm',
    '1-3 v': 'jlcvv',
    '6-10 f': 'ffjfsnfbfxfvklfffff',
    '4-7 v': 'vvvvvvvvv',
    '8-10 c': 'tcccccdcwcc',
    '4-11 r': 'xwxfvzbcrvr',
    '2-18 w': 'rwznqcwkzpqlmngpjnrn',
    '3-19 h': 'qbhsthtkmhfnnkxvbphk',
    '1-3 b': 'bbbbb',
    '3-9 p': 'pppppppppp',
    '10-13 t': 'tttttttrttttttt',
    '2-3 f': 'hffjff',
    '1-2 k': 'zzkkv',
    '4-5 s': 'snbss',
    '8-11 f': 'fffffffpfff',
    '8-16 r': 'hlgcwsqqrpcflnsng',
    '2-8 k': 'kkkkkkkffvkk',
    '7-15 k': 'ckcphgbjkpvkrwk',
    '15-17 w': 'wvlwwnwzwwwwmswwww',
    '1-2 j': 'zgjjj',
    '5-8 x': 'xxxxdxxjxxx',
    '12-16 v': 'qvdnvqdsgcxwqsnv',
    '12-14 s': 'jswppnmlxbzjwn',
    '1-3 g': 'ghgg',
    '5-14 k': 'rbckkkvdltkmckp',
    '9-11 h': 'qhffhhhdchshh',
    '4-5 g': 'gggvgg',
    '2-5 t': 'gtdjfp',
    '7-8 g': 'vgtdgggb',
    '1-4 s': 'hbssskscq',
    '12-13 r': 'rfjrrjrrrrrgg',
    '13-16 j': 'jjjjjjjjjjjjjjjjjj',
    '3-14 p': 'hvkjnlhpngzrvpw',
    '8-10 g': 'kgggwrggggg',
    '12-18 f': 'fmlbmsfxsgpjnvfkkf',
    '2-3 f': 'dffg',
    '6-7 l': 'llllllll',
    '1-3 s': 'jshth',
    '1-5 s': 'gssss',
    '3-4 p': 'mgpptdwztpkfjmgmsw',
    '4-6 c': 'cfcksc',
    '4-6 v': 'hvdvgscqv',
    '18-20 t': 'thtjtvjttbttxtthttpt',
    '2-4 c': 'cmcc',
    '3-5 q': 'qqnqhv',
    '6-10 l': 'pllrllllllxlllh',
    '3-5 k': 'hzknk',
    '13-17 t': 'hcttttvdttttjtttpntt',
    '9-14 d': 'dxdddddddsdddhddddd',
    '4-5 p': 'rmcps',
    '3-9 z': 'hzcmfzspk',
    '3-8 v': 'cmqvvkwv',
    '18-19 n': 'nnslnnnnnmnnnnnnnxnn',
    '4-5 c': 'cghcccscccc',
    '11-16 k': 'kkkkkkmkkkklkkkk',
    '2-5 r': 'grlrr',
    '6-19 w': 'wzxxrbwwzjwftpzwzdg',
    '15-16 w': 'wwwwlwwwwwwwwwjw',
    '3-9 x': 'pvxtkcnsnrcx',
    '1-8 q': 'jqmxxgqq',
    '7-9 t': 'wntmvtnlqt',
    '10-12 t': 'ttttttzttttt',
    '15-16 c': 'gjcgjxbnscbcchqc',
    '8-11 g': 'dgfggjjzggg',
    '10-11 x': 'brpxrlbkvxf',
    '11-14 p': 'ppppppppppgpppp',
    '4-13 p': 'kdmndpfnjpsdp',
    '6-10 j': 'mmnzjjjhrdj',
    '4-12 b': 'bbbbhbbhblbsb',
    '10-11 z': 'zzwrzzzzzhnzz',
    '6-7 s': 'ssltvnszhr',
    '4-7 k': 'skckkkkl',
    '1-12 s': 'sljgsxwslfcqss',
    '12-14 f': 'wffzfkkfczqtdf',
    '3-4 d': 'wgqs',
    '6-7 v': 'vlvvvvqvvpv',
    '2-9 t': 'kwxfnqpvtsnhm',
    '7-12 b': 'bbbbbbwbbbbbbbb',
    '2-7 m': 'rscmzmms',
    '1-5 s': 'hgjsszkss',
    '8-11 x': 'vxxrxwxdxxvxrqkrz',
    '8-11 f': 'fkfdgnqfllfjlc',
    '1-2 g': 'ngggzggmgjggmtzdgcv',
    '6-11 q': 'tvjdmvttzvbxfdqgd',
    '5-8 f': 'fmfffkff',
    '2-5 d': 'dxddjqdxv',
    '2-8 k': 'bbpsjxtkljbk',
    '12-16 q': 'ldqqqqqqqqqqqqqq',
    '2-4 n': 'nvxf',
    '2-6 w': 'wwwwwzwv',
    '4-7 h': 'hhnshhrhh',
    '3-7 g': 'mgcqcfl',
    '2-4 c': 'hcbczxmk',
    '15-17 g': 'ggggggggggggggggfg',
    '12-13 w': 'wwwwwwwwwwjwww',
    '6-8 r': 'rgrrrprtr',
    '13-16 n': 'nqnnnnnnnnnnrnnh',
    '4-7 d': 'mdddvdd',
    '10-14 p': 'hpjpwppppsbpwspppp',
    '11-14 v': 'vvvvvvvvvvvpvfvv',
    '4-5 x': 'vwxrlxfxbxpq',
    '1-6 v': 'zvvvvrvv',
    '4-5 q': 'qqjqqsd',
    '3-4 f': 'ffff',
    '13-14 m': 'mmmmmmmdmmmmzz',
    '11-14 r': 'rrrrzrrtmrqrrrdrl',
    '14-18 q': 'qqqqqqqqqqqqkgqqqv',
    '2-5 f': 'mffzfzjmlmrzqk',
    '13-14 x': 'xxxxxxxtxxxjxxx',
    '1-3 s': 'qshtqssxsqb',
    '4-11 t': 'tttptttwttbtt',
    '3-6 s': 'gbmgst',
    '2-12 v': 'hvmnqtnvmjdkghcfjmtd',
    '12-19 g': 'gggggggggggmgggggggg',
    '9-10 m': 'mmmmmmmmcmm',
    '1-10 f': 'fffffffffhf',
    '1-12 k': 'vkkkkkzkkkksk',
    '1-9 m': 'mmmmmmmmmmmm',
    '4-6 w': 'wlqwzw',
    '17-18 d': 'ddddffdddddddddlddd',
    '3-4 g': 'hgzg',
    '3-5 r': 'fbrnbr',
    '2-7 j': 'rrjjsmjjjzj',
    '15-18 n': 'nnnnnhnnnnnnnnbnnjnn',
    '2-4 b': 'hzltnwvbs',
    '11-12 k': 'skkkkkkkkkkk',
    '6-11 x': 'xxxbxxxxxpjhxvxxxfxx',
    '4-5 d': 'dhjdd',
    '2-7 v': 'vbvvbvvvvvvv',
    '4-5 g': 'ngggl',
    '10-17 p': 'ppppppptpppppgpppp',
    '5-11 f': 'fqcfvtpfqhc',
    '7-14 d': 'hpdsddwtcddqhblt',
    '5-6 k': 'kkkkqhkkk',
    '4-7 w': 'vjkwjmwwwwhrv',
    '2-3 c': 'dcqw',
    '3-4 q': 'qqnmqqqqqn',
    '3-5 b': 'bbbbb',
    '13-14 z': 'qsbkzgzhmzthzzcrp',
    '6-13 t': 'nttstttttttttttt',
    '13-14 v': 'xvxvvfjvvvvtvk',
    '2-3 q': 'qvwqq',
    '1-4 v': 'nvpsv',
    '3-5 v': 'vvvvsvvb',
    '3-4 p': 'npph',
    '1-3 l': 'lllllf',
    '18-19 j': 'jjjjjjjjjjjjjjjjjhh',
    '8-12 d': 'vmhvddqddhdd',
    '2-7 l': 'rfdzrldw',
    '3-4 n': 'lnnjsn',
    '2-3 m': 'mxlfvqmm',
    '16-20 n': 'nmsnmdhwvwzlsrpnvcdn',
    '8-13 l': 'lllllllqllllbl',
    '6-7 w': 'lpwwwvhww',
    '3-5 s': 'sqsshnwp',
    '1-4 z': 'zzzk',
    '11-13 z': 'zzzzzzzzzzjzzzz',
    '2-3 n': 'nnnnt',
    '2-5 b': 'jbpdn',
    '2-16 m': 'bmflbclkmlfkpwdmf',
    '3-4 b': 'bbjc',
    '10-11 b': 'bbbdbbbbbbvbbb',
    '5-11 z': 'zzzzzkzzzzzzzzzzwzzz',
    '2-13 k': 'qkfbfkxxpvwpqbg',
    '5-8 n': 'jnxpnngs',
    '2-4 z': 'bbnk',
    '1-2 w': 'glww',
    '1-6 g': 'zggggg',
    '1-3 g': 'bgjg',
    '8-15 v': 'vvvvvvvpvvvvvvvvv',
    '2-8 t': 'jtvkktkg',
    '1-5 n': 'xzvnp',
    '16-20 w': 'mnxtkjwkmbqjwnndwwws',
    '7-8 g': 'xgggggggg',
    '13-15 m': 'gwjdqbtmnfjfwsmj',
    '1-3 r': 'lrzrmqrr',
    '14-15 x': 'xxxxxxxxxxxxxcxx',
    '16-19 c': 'cccccccccccccccccczc',
    '1-7 j': 'tbjrsjjnj',
    '11-17 j': 'jjjjjjjjjjjjjjjjfjj',
    '2-3 s': 'prsc',
    '5-15 f': 'qfgftfffffrfffvff',
    '7-11 f': 'fffffffffffff',
    '9-11 j': 'vhpjgjfjjkjmvfjvhdj',
    '3-6 g': 'gggtgggrg',
    '7-9 g': 'lzgggggfg',
    '6-7 b': 'bbqtbtb',
    '5-7 h': 'hfthhfhhhh',
    '12-19 g': 'lggggggggggnbbggfgl',
    '1-11 z': 'zzzzzzzzkzzzzz',
    '5-10 r': 'gxdbrvrzrb',
    '3-4 c': 'chnc',
    '5-10 h': 'hhhhhhhhhhhrhhsh',
    '4-5 d': 'dqrmdd',
    '9-10 z': 'ztxnxptzzz',
    '3-4 k': 'kvxksw',
    '3-5 t': 'gstxtvbsbmzflfrft',
    '1-14 v': 'vtvdnmqqfjkwft',
    '7-9 n': 'kgsndnnnn',
    '3-4 p': 'pvcp',
    '12-14 c': 'zchftgbmccpcvjbr',
    '1-10 k': 'cckkkkskjk',
    '1-2 t': 'tlbt',
    '6-15 j': 'vqnjjjzjsmctzqj',
    '7-8 n': 'nnnnnnmxz',
    '10-13 b': 'bbbbbbhbbcbbb',
    '5-7 m': 'qmmmmjv',
    '2-8 n': 'nnncnnntnnnmnnn',
    '3-6 f': 'mvhwpdnfccnkhxq',
    '5-11 h': 'hhhhhhhhhhsh',
    '15-16 g': 'gggdggsgkgggggzg',
    '5-6 j': 'jjjjjbj',
    '3-4 f': 'mftk',
    '10-11 p': 'pxpppppppbppppppp',
    '8-9 g': 'dnjkxldnwgcdmqgnq',
    '18-20 q': 'qqqqqqqqqqqqqqqqqqqp',
    '5-7 q': 'vqpqfqrhqbdkkq',
    '3-5 h': 'nvhshgvzr',
    '13-14 l': 'rllnczlblllcll',
    '1-6 r': 'rnltrrr',
    '17-18 f': 'fffffffffffffffffff',
    '17-18 z': 'kzzzfzwzzdklxzskjl',
    '3-9 v': 'vczjvwrxvmsn',
    '8-13 f': 'fffffvffffffffffffff',
    '4-8 v': 'vvznvvvgvv',
    '10-12 l': 'lmllzlrllblwh',
    '8-11 d': 'pdcddddcdddbdbdd',
    '1-2 t': 'dtttttttdzbttckrtt',
    '1-7 w': 'wwwwwwpzwwww',
    '6-7 d': 'wsdvprj',
    '17-18 w': 'tjflkmhjvgfwccdbgw',
    '7-12 p': 'gfjwrhsmpcvppw',
    '2-3 p': 'pbpl',
    '18-19 m': 'mmmmmmmmmmmmmmmmmmmm',
    '3-4 d': 'bjdbdvjmtp',
    '3-4 l': 'jlllhblkr',
    '6-7 j': 'ljbkvlvjnv',
    '5-9 d': 'dddkddddddd',
    '4-10 l': 'fxflvrnjxb',
    '2-8 v': 'bshlrvvvvfk',
    '10-14 p': 'pppcppppppppprpppp',
    '3-8 w': 'svwfghvp',
    '2-10 t': 'tpttttttttt',
    '4-5 s': 'ssszsssl',
    '1-4 n': 'nnfn',
    '4-7 w': 'wwwfwwlwwwwwwwww',
    '11-12 f': 'tqflrfffqfffffffxc',
    '1-3 q': 'qfqxbqqbqtcvfkbfng',
    '2-3 n': 'twnffvn',
    '3-4 x': 'hxhxwxxxxbxwdt',
    '4-8 k': 'wnhtrzjwrkcmblnbhc',
    '9-10 m': 'mmmplzmcmm',
    '14-16 g': 'cgdgfgvgbfzggcrskll',
    '3-4 f': 'fhff',
    '6-18 w': 'wwpskqxwgwwwwcwvxw',
    '6-8 h': 'fvhqxkwqlssjhmqsv',
    '4-5 k': 'kkkkk',
    '1-4 n': 'nnnfn',
    '3-5 r': 'rrdrrrr',
    '10-11 k': 'qkkxkkkkkqk',
    '12-13 m': 'mtmmmmmmmmmhm',
    '3-5 v': 'kvvhkksv',
    '2-3 m': 'mrmm',
    '14-17 x': 'xxxxxxxxxxxxxxxxr',
    '7-8 c': 'cckccmscmc',
    '9-17 w': 'wlwwwgwkjzwxmjwhs',
    '1-4 k': 'kkkkkkkkkk',
    '6-11 j': 'jjjjzjjjjfj',
    '4-5 s': 'zssbs',
    '4-6 g': 'qfrggpcgqwgg',
    '10-13 g': 'tggggxsgggggggggg',
    '3-9 m': 'qmzjjjmqnlhc',
    '7-15 p': 'qlrpprvmgzlltpm',
    '3-6 z': 'pxzzbzzb',
    '4-12 c': 'jlkckndszjgcvjfcxw',
    '8-9 r': 'rrrcrrrrrr',
    '2-12 m': 'rnmmmlxmvvmzrqmmqw',
    '6-8 t': 'xpdtttttccz',
    '8-15 p': 'ppppppppppppppnppk',
    '3-4 j': 'zzxc',
    '1-8 z': 'nfqznthhzzgzwsttfbz',
    '3-4 z': 'znzs',
    '6-9 z': 'fzzzzzzzszzzzzz',
    '1-2 n': 'nnnn',
    '3-17 x': 'hhxhqhfkzvpxlsrzx',
    '4-6 h': 'thhpkhxhlzdhhrh',
    '11-12 p': 'ppppppppppfwpppppp',
    '8-11 h': 'hmgkhhhhhwhhhmhk',
    '3-4 w': 'wwwwvf',
    '1-5 j': 'jqjqj',
    '3-11 w': 'nblvwbwjwmwswfwtsrw',
    '5-10 v': 'hvrvvggjfv',
    '4-5 j': 'cjqqs',
    '3-7 n': 'lnnqnwnnnn',
    '2-4 t': 'kkmp',
    '13-14 f': 'ffffffffffffff',
    '6-10 h': 'tzswmhnbdqqpcv',
    '1-5 v': 'zvvvvv',
    '8-9 r': 'rvprrrrrdrr',
    '2-4 l': 'dwxf',
    '5-7 n': 'nnnnnjn',
    '9-12 x': 'xxxxxxxkpxxfxxxxfxx',
    '8-14 x': 'xxgjxdsccwtfvxq',
    '16-19 h': 'cbhkhjhmcdxhndnhhnmh',
    '4-8 d': 'dpdclrdjqd',
    '7-9 t': 'rtntcctgtrfpmq',
    '3-4 s': 'smlf',
    '6-7 n': 'gnljnnnnn',
    '16-18 t': 'ttttttttttttkttwtdtt',
    '3-5 d': 'zddzdkws',
    '9-10 w': 'wwwwwwwwsr',
    '9-11 g': 'ggggggggggg',
    '11-13 h': 'jqjhnrrhzxtmhhhhbcq',
    '4-6 x': 'xxxxxqxxxx',
    '13-18 s': 'pswsfxfjkhvsskssbsgr',
    '2-6 f': 'fffffp',
    '14-15 r': 'rrrrlrrrrsrvrrrrmlrr',
    '9-12 m': 'smmmzmmtsmnp',
    '9-14 q': 'xqgqqxqjqgzqlqwnq',
    '2-15 w': 'wwmwwwwwrwwwwwd',
    '2-6 c': 'cbcccnc',
    '18-19 r': 'rrrrrjrrrrrrrrrrrgrk',
    '3-13 d': 'rvwpflbrfrgpd',
    '5-7 t': 'ntxttrtprgtvxt',
    '2-14 k': 'rbffdmghvzwbml',
    '4-5 m': 'mmhmwc',
    '6-7 z': 'zkhlqqgpvllmbf',
    '7-10 r': 'rrrrrrbrpvrr',
    '14-17 m': 'mmnmmmmmmmmmmbmmmm',
    '3-5 r': 'rvcrssrrwrr',
    '12-19 t': 'ttttttttmttbttttttxt',
    '9-19 v': 'vvvvvvvvpvvvvvvvvvxv',
    '15-18 d': 'ddhddcddsddddwdldd',
    '7-10 k': 'qkcmkgkblkxkzb',
    '11-14 n': 'nnnnnnnnnhnnnnnnn',
    '10-16 k': 'kkkvkkkkkkktkkkkk',
    '6-8 s': 'sdfjbrswbwkvsqlz',
    '1-2 g': 'dsgg',
    '16-19 g': 'bpggwcpzdgpnggggkrg',
    '5-7 l': 'rllwlls',
    '8-9 s': 'sssssssss',
    '12-13 b': 'bbbbbqbtbbbkb',
    '13-15 w': 'zwwwwwwtxwwdkvwwww',
    '4-5 c': 'pccckcc',
    '4-6 v': 'hnvbrb',
    '3-6 q': 'jbqrqq',
    '3-4 w': 'wwwww',
    '5-14 k': 'hgmkkwxknkwhlkddg',
    '3-4 k': 'kkdk',
    '4-5 p': 'ppzppppp',
    '5-7 k': 'kkkkkkpkk',
    '12-13 m': 'mmmmmmmmmmmmmmmm',
    '1-6 r': 'srrrwnsrrrrr',
    '18-20 p': 'ppppgppffppwpppppppp',
    '7-8 f': 'ffffffjhffffffff',
    '2-4 l': 'dsqq',
    '10-12 q': 'qqqqqqqvqqsf',
    '3-8 l': 'svrqdrlx',
    '3-5 w': 'wwswmw',
    '12-15 q': 'tntnjzqhcnqqqqt',
    '1-8 j': 'nscgpjmj',
    '7-11 j': 'jjjtsrjjtjx',
    '5-6 m': 'tktpcvp',
    '1-2 z': 'cdzkbqbhjn',
    '3-4 h': 'hhhxh',
    '4-15 g': 'gggfgggmggggggngpgp',
    '1-6 z': 'zzswkz',
    '1-5 g': 'gggggg',
    '8-14 h': 'phjhfhxhjcztrw',
    '9-11 h': 'hhhhhhhhhhlh',
    '15-17 t': 'txcjtthtthtmtntttl',
    '7-8 z': 'zzzpzdzj',
    '2-9 x': 'xxxxxxxxlxxxtxlx',
    '6-11 j': 'mjqtrjrmhbjpsjw',
    '1-2 b': 'bbbbnbgbbbb',
    '6-7 z': 'cptkzzz',
    '12-13 v': 'vvwcwvvvvvqsdpvxvlvv',
    '1-13 w': 'hwwwwwwwwwvwswwwwwwg',
    '8-9 h': 'xjhgckphh',
    '9-13 z': 'zzzzzzzzzzzzkzz',
    '2-9 c': 'ncxccnclc',
    '4-8 h': 'hnmhhfhhtmch',
    '5-7 p': 'pppxkpst',
    '2-4 b': 'fwlwgbbbxhbb',
    '9-16 z': 'zzzzzzzzhzzzzzzvzz',
    '5-18 t': 'ttttktttttttttttttt',
    '1-2 t': 'hftttzt',
    '16-19 w': 'jcpwnqwwwlmwfflwwgkw',
    '1-3 d': 'dddg',
    '13-16 r': 'hrlwdqrrtrrqrwrp',
    '3-4 j': 'xjcj',
    '18-19 n': 'nnnhnnnnnnnnnnnnnpnn',
    '4-5 q': 'qqqqrq',
    '13-14 d': 'ddddddddqdddptdd',
    '8-13 n': 'vsnnnvwnrfqmnsctkq',
    '2-12 d': 'ddddddddddddddddbv',
    '7-9 m': 'msmmmmgmm',
    '14-17 t': 'wttxttzrttccttttmt',
    '1-3 z': 'hzbz',
    '6-15 p': 'pppppzppppppppxpp',
    '5-6 j': 'gggjxpdcnjjxjjnmv',
    '4-6 k': 'kmwkkzf',
    '2-10 j': 'pjjjzjjzsq',
    '9-14 n': 'nnqnxnnnzwnnnnxmnnln',
    '2-3 j': 'jjjmkffhsz',
    '11-12 n': 'lxmlktcnknnn',
    '17-18 w': 'wwwwwwpwwjkmwwcwwwww',
    '4-6 k': 'vkkxfksbkkkkkkxkk',
    '3-12 r': 'nrdrrkrcmbrkrsrrrr',
    '7-8 t': 'ttttttwttt',
    '4-6 s': 'scsssvkqsks',
    '6-11 h': 'hhhhhwhhhhmfhhhh',
    '4-9 n': 'nnnrnnnnnn',
    '2-5 z': 'zzzwz',
    '5-6 d': 'dddddxddd',
    '6-7 f': 'ffffnrgx',
    '4-13 d': 'xjndrdhnxdqnddj',
    '5-6 v': 'cvktvf',
    '2-15 x': 'lxhsltbnrdwwxbxftvb',
    '9-16 r': 'rrrrrrrrrrrrrrrfrvrr',
    '1-8 m': 'cwgsmxmrsmm',
    '4-11 l': 'gdcllsllkllwcv',
    '1-3 d': 'pfsjdhjjvzdsqkcq',
    '10-16 r': 'rrrrrrrrrrrrrrrhrr',
    '8-11 d': 'dmdddhddddkdddd',
    '7-12 l': 'lldsllcllmlbl',
    '8-14 b': 'wdztcvrbdcbmsjglr',
    '2-6 w': 'wbwwwnw',
    '6-7 g': 'tmlqggg',
    '10-11 q': 'qqqqqqqzqdqqqnqqqqq',
    '7-14 b': 'bbbvbbbbbbbbbbblbqbb',
    '1-3 d': 'dgrdn',
    '4-6 m': 'mmmmmsmm',
    '5-6 v': 'vvvvvvv',
    '1-2 s': 'fdsss',
    '14-17 v': 'vvvvvwvvvvvvvwvvx',
    '1-4 p': 'pppbpppppppg',
    '6-7 j': 'jjjjjjj',
    '10-12 h': 'hhhhhhhhhhhhhhhr',
    '3-8 r': 'srhrrrprvzvpv',
    '11-12 s': 'sssssssssstm',
    '2-6 f': 'gffcnfrjhjjk',
    '2-4 b': 'bbbqbb',
    '9-11 l': 'llllllllrlclll',
    '3-9 n': 'nnndvnnnnjn',
    '4-18 j': 'jqbjlwhjmgfhzrszzjz',
    '2-14 r': 'rrdkhrjrprrrwr',
    '6-9 r': 'rrrrrrrrrrrr',
    '3-7 h': 'hhghhgh',
    '2-11 v': 'hzxmqjrknfvn',
    '7-8 r': 'jwsrrrpgggjzqtcvprs',
    '1-2 g': 'tnggg',
    '4-10 z': 'mzpcsdnmzzmhmtl',
    '4-10 j': 'jwvjdhtkfjjpq',
    '12-13 w': 'wwwwwfwwmwwnwww',
    '5-8 h': 'hhhdmhhphhhhhhhhhhh',
    '9-10 j': 'jjjjjjjjjjxjjjj',
    '6-8 t': 'ttgtttqgrvt',
    '7-11 r': 'rrrrrrqrrrv',
    '5-10 r': 'rrrrrrrrrrr',
    '17-18 w': 'hwkgjwkwztwwxwwwww',
    '6-10 s': 'bvrfsgjxfs',
    '3-7 n': 'zclkprdknp',
    '7-15 t': 'ttttfptttnwztttqvt',
    '7-12 f': 'ffffszszfffn',
    '6-11 x': 'mfxpwxbxxnqt',
    '7-12 j': 'kjjjjjmhpvjjjj',
    '2-3 d': 'ddsdb',
    '3-5 c': 'czbcd',
    '5-9 h': 'zbxhfglzk',
    '6-7 x': 'xxxxxlxx',
    '1-4 b': 'tbbt',
    '8-12 p': 'pzlppppzxdvp',
    '2-10 m': 'mfhhbrjzcmh',
    '13-14 q': 'qqqqqqpqqqqqwvqqqx',
    '4-5 l': 'hldll',
    '15-16 n': 'snhnjgfbntnplcnf',
    '6-10 x': 'xxxxhxxxxx',
    '15-18 n': 'pnngsnxccmnkgznncfn',
    '3-8 l': 'ghlllqmlgb',
    '1-4 q': 'pqqwq',
    '7-8 w': 'wwwwrwwdw',
    '19-20 t': 'tttttttttttttttttttj',
    '4-15 x': 'mfnfttdtqtdxkwp',
    '3-8 z': 'zzzzzzzlz',
    '12-16 d': 'dddqdddddddpdddsdd',
    '8-11 h': 'hhhhhhhhhhhh',
    '11-15 q': 'qqqqqqqqqqqpqqqqkq',
    '8-11 f': 'fxqzkthfxnd',
    '12-16 k': 'mbwkkkkkwgkkkklx',
    '4-8 q': 'gbnbrhbqkbxpqn',
    '3-13 c': 'cccccccccccctcc',
    '3-4 m': 'mmjvwm',
    '14-17 d': 'ddddzwxdqnrjdtddj',
    '3-10 j': 'xjsjjjjjhhnjbjwj',
    '11-13 s': 'sssssmssssnsl',
    '5-8 f': 'kwnfrnvr',
    '6-12 b': 'vfbjzbpkcbvdbb',
    '6-7 q': 'gqqhhqq',
    '1-4 q': 'qfkb',
    '3-4 r': 'nrrc',
    '11-14 z': 'znlzkbvzlzzvjz',
    '5-7 h': 'hhkwvfb',
    '3-7 t': 'trhfkdjm',
    '10-11 n': 'nnnnnnnnnznn',
    '2-3 q': 'qqjqjfbqnqtgxpfqn',
    '3-5 f': 'ffffm',
    '11-12 d': 'dtdddddcdddd',
    '4-7 s': 'ssssvsss',
    '2-14 f': 'qfkkkfkffznrcfk',
    '7-13 z': 'dczxkclzzzztz',
    '6-17 m': 'cjtfbndqvnnbmtmrm',
    '10-11 w': 'wwwwwwwwwlww',
    '7-18 d': 'vdppddfsfkddpjtfvr',
    '17-18 p': 'ppppppppppppppppppp',
    '12-13 c': 'zcchscccccqlc',
    '5-6 r': 'pfjjrrzr',
    '2-8 q': 'qqqqqqqzjq',
    '5-6 b': 'blbbbps',
    '4-5 l': 'lllllll',
    '6-11 n': 'rgplnnsnnfn',
    '4-10 j': 'rddsbjrstr',
    '5-6 h': 'hvrltlrjhhnmqkxhhxkl',
    '3-9 s': 'ssqsssssjssssssssbss',
    '8-9 r': 'rvvrrrxsrrdtrb',
    '11-13 b': 'tbtbwmbbbhqmb',
    '8-9 b': 'fcbbpvlvjhmkf',
    '15-16 f': 'ffffffffzffffffb',
    '7-10 t': 'zfpwcwmxlbhxtjtp',
    '2-5 z': 'zdzzbz',
    '5-6 p': 'xphrnbf',
    '6-11 f': 'qffpxfmfcpff',
    '6-11 m': 'pmjrmjqjvrv',
    '1-2 q': 'kwqqh',
    '6-7 x': 'xxkxxxxkxxxx',
    '12-15 w': 'wwwwwwwwwxwswwww',
    '15-16 q': 'qqsfgdgqqqqqwqqqqq',
    '9-18 q': 'qqqqqwqqqqqqqqqqqqqq',
    '5-6 v': 'lvvqvv',
    '14-16 b': 'dbfrbbbkbbpbkbbm',
    '1-2 p': 'kjpp',
    '2-4 q': 'krjv',
    '2-7 t': 'mkmtdgh',
    '1-2 s': 'jfss',
    '8-12 v': 'vvvxhvvvxzmvqwvq',
    '10-11 p': 'ptptjpcnppp',
    '3-4 x': 'ffdhvxnxxx',
    '3-8 x': 'xxfcxxxwxlxxxqxxx',
    '1-2 g': 'gggg',
    '6-8 d': 'dddddcdjjdlddddd',
    '1-11 v': 'vvvvvnvvvvhvkvv',
    '2-5 s': 'lfsnrs',
    '4-17 t': 'ttthtttftttttttrt',
    '12-14 z': 'rbfrzlfvwcbkczqm',
    '13-15 m': 'kmmqhbmmmpmmhfm',
    '4-8 v': 'vxnpvvhjvvj',
    '6-8 s': 'lzzntswssxn',
    '2-3 n': 'snngn',
    '8-14 t': 'dttttttttttjttt',
    '1-8 s': 'sssssssss',
    '16-18 n': 'tznvpjjbgxmpfwhnbn',
    '14-15 j': 'jjmjjfjjjjnjjjj',
    '4-12 t': 'dkwtrtlqntpll',
    '17-18 d': 'nrlrntddjdkddtdztm',
    '4-7 q': 'xmmdqzqlfqmhf',
    '16-17 n': 'nnnnnnnnfnnnnnnknnnn',
    '9-11 m': 'mmmmmmmjjzs',
    '2-6 b': 'dbjdgbglbgx',
    '5-15 b': 'rrlbbkwbbntwfkb',
    '4-5 n': 'pnjvn',
    '1-4 b': 'pkbd',
    '12-13 k': 'kkkkkkkkkkkdlkkkk',
    '1-5 j': 'hbljlvdjnvfj',
    '1-3 l': 'llll',
    '8-10 j': 'jcmjqlbjjh',
    '3-6 q': 'qqlhcnc',
    '2-6 d': 'grqczd',
    '1-2 b': 'blzbmnjfd',
    '6-8 d': 'ddztdfdhdd',
    '7-11 r': 'rrrtrdrxmsgrs',
    '1-4 b': 'bbkc',
    '2-5 s': 'ssmswssss',
    '4-8 n': 'nnnbnnnxnn',
    '2-3 d': 'dsrdddd',
    '16-17 r': 'zrvrrrtzrrrrrrrrfr',
    '4-9 v': 'jvmqvvvvvvwx',
    '5-6 x': 'xxxxxb',
    '5-6 t': 'tfttnc',
    '3-4 p': 'pprfp',
    '6-11 j': 'ptcjmstmtbhxfvpsww',
    '4-5 x': 'xdhqx',
    '6-7 d': 'dddddddd',
    '4-5 b': 'wbjbppzbhjkf',
    '2-6 g': 'gggggdg',
    '3-8 j': 'jjjfrjjkjjjmjjml',
    '7-11 h': 'hwhhbrhhhzh',
    '5-9 b': 'lpgjbssbbxk',
    '6-7 s': 'nsxssssssss',
    '3-4 l': 'mllnl',
    '5-6 r': 'rmpgdk',
    '1-4 p': 'fpbmctbpl',
    '5-6 s': 'scnmsss',
    '2-4 m': 'jdkpmhmhmqtft',
    '8-15 d': 'ddddpsdrdrqdmddd',
    '6-7 s': 'snsssfs',
    '4-6 g': 'ggggggg',
    '7-8 x': 'xxxxbxxx',
    '6-8 b': 'bmbbbvbhbbb',
    '9-10 r': 'rrrrrpmrtmrrr',
    '3-11 x': 'xxqpxtxmhdrxtxxxxxxx',
    '10-12 l': 'lwlpljllllllll',
    '3-5 l': 'lzlrl',
    '3-5 b': 'bbbbvbpbbbbb',
    '5-9 z': 'zwzzzzzzkc',
    '12-14 l': 'qlnlxwrzpgllplbml',
    '4-7 n': 'lwdzpjtmn',
    '5-10 b': 'bbbbjbbbbx',
    '6-7 j': 'njzdjjsxfpp',
    '5-14 j': 'djnljhlrdmqnxcht',
    '3-4 z': 'dtzz',
    '10-11 m': 'tcmmhmhcsmm',
    '9-13 p': 'pppphpppppcphfwbp',
    '1-6 m': 'lmmmmw',
    '2-4 q': 'hnzqqqprm',
    '17-18 p': 'plpfzlkpzdhfpptgpq',
    '3-17 r': 'rrprrrrrrrrrrrrrlrr',
    '5-8 n': 'nnnznnnnnn',
    '3-12 s': 'khjvspqsbmcst',
    '6-8 w': 'cwbmhwqw',
    '2-4 d': 'dddddp',
    '1-6 b': 'tsbbbgbt',
    '3-10 d': 'vvhzmpscssdwcxlvjjd',
    '2-3 m': 'mmmmmmmmmnmmmmmmmmj',
    '2-13 q': 'qqcpmtfwwffdqkwn',
    '15-16 k': 'kkkkkkkkkkkkkkmf',
    '2-3 j': 'jjnv',
    '1-2 b': 'btbb',
    '5-7 b': 'bbbbxhbbxtbb',
    '5-7 g': 'gggggglgzg',
    '3-4 b': 'bbpc',
    '1-11 k': 'kkkkgkkkkkskk',
    '1-14 h': 'lhthhhhnchhhhxhhhh',
    '6-7 q': 'qfqlqbkqqqvqfqzqs',
    '3-5 s': 'ssbsss',
    '9-13 h': 'hhnhhjhvhdhhhbhhh',
    '4-7 j': 'txdsljn',
    '13-16 z': 'dgzkzzzkzzzzbxznw',
    '7-8 s': 'sssssxgs',
    '13-14 h': 'sphwccnrvhlbhjx',
    '12-15 x': 'vtcxxxqjcwzbkxx',
    '3-5 v': 'vjlvvvvvnv',
    '11-14 k': 'klkkkkkkkkwkkkkkk',
    '9-10 c': 'cccctcccccccccc',
    '8-9 b': 'bbbbqlvnbq',
    '3-7 d': 'ddddddddd',
    '4-7 s': 'pbmwcmsrd',
    '4-6 s': 'gxssqsw',
    '7-16 r': 'rqdpsrrchrtcblnlsrr',
    '10-15 x': 'gjbvwkmpzxfrvxx',
    '3-6 k': 'drkchxtzkhnn',
    '1-2 g': 'nzvkggbdg',
    '16-17 f': 'fffffffffffffffkbf',
    '1-9 t': 'gttttvttstt',
    '10-12 c': 'cgcvcdcccwcccccj',
    '7-8 k': 'zkkpkkkf',
    '8-9 n': 'ngfnvnrwnnfl',
    '11-13 j': 'hssxkhgvdhcjxhp',
    '3-4 b': 'bbbbbbbbbbbbtck',
    '3-7 b': 'nphsgbwbv',
    '9-13 w': 'wwwwwwwwgwwwwwwwww',
    '12-15 v': 'vvvvvvvvvvvvvvvvv',
    '6-15 k': 'ftlgvkjxcngkwkjrnwn',
    '11-13 k': 'kkskkkkkkkkkkkkk',
    '1-13 s': 'sssslsnssssssssssss',
    '9-11 t': 'ttttttttttttt',
    '1-2 h': 'hmhh',
    '6-7 h': 'hmhhghv',
    '2-4 v': 'gvnv',
    '3-6 l': 'hplmlltl',
    '5-16 s': 'pqvnxbbxfnhdhmsswqx',
    '4-13 z': 'dmwwlzznknzbzvzzw',
    '9-10 c': 'cflcqdcwcvqmkjdqsgpc',
    '4-10 f': 'mffxxfffflfsfgmlmxf',
    '3-4 d': 'vdxdbw',
    '1-3 z': 'wzdzzzg',
    '9-10 z': 'zzzzwzzzlnz',
    '2-5 n': 'knlfn',
    '5-7 c': 'klcbczc',
    '5-12 f': 'jrdqgrzkdplws',
    '3-5 w': 'kftbw',
    '1-4 s': 'sssgrs',
    '6-9 n': 'hngnnnnjnnnn',
    '13-14 k': 'kkkkkkkkkkqqkjk',
    '10-18 s': 'xbsssxqqmvmshskjjs',
    '5-6 k': 'snxjhwglkt',
    '10-13 h': 'mtthhhxmsvlshhhnhl',
    '7-16 z': 'zzzzzzwzzzzzzzzzzz',
    '14-16 m': 'rmmvmhtmfmmmjmmcmmmm',
    '8-11 s': 'sssssdsssspsss',
    '6-9 g': 'clgdxllghzggqfvrxgzf',
    '14-15 x': 'xxxxxxxxxxxsrxxxx',
    '4-11 q': 'hqplnqwfsthmhspq',
    '12-13 g': 'pzggkchrpjsct',
    '7-12 t': 'zctsttbtttttt',
    '3-4 s': 'jknhdlnsgssg',
    '9-16 c': 'xlcrsqspctdcvhqc',
    '4-19 f': 'vvzfktsstkbkngbfndmv',
    '9-11 b': 'bbhbbbjmzbh',
    '3-6 x': 'xqxxxvrx',
    '7-8 g': 'gggggmgx',
    '9-11 k': 'jrkpwggvkxk',
    '3-4 m': 'mhpfmmmm',
    '6-7 f': 'fqfffldrf',
    '9-10 j': 'tjjcjdtjdj',
    '2-5 c': 'qcccf',
    '5-8 b': 'bbvbqbbtbbbbbb',
    '6-7 q': 'hhpwdqqfxzgjgqv',
    '2-5 q': 'rjqxs',
    '9-11 q': 'hlcqqqxlrtq',
    '2-13 n': 'nnnvwxgqbvdlnckgzgsr',
    '15-16 l': 'jtcxfkljlwllpbgb',
    '3-4 c': 'ccmscc',
    '9-14 l': 'llllllllhllllhl',
    '2-5 z': 'zzzgzzzw',
    '2-8 b': 'blclwtdbz',
    '2-3 l': 'llhllll',
    '8-10 s': 'sssssssszr',
    '1-4 f': 'fffz',
    '4-11 t': 'ttttttttttltt',
    '3-7 m': 'wcmkmznf',
    '6-8 v': 'lnkgrvnvprjcjhfvwph',
    '6-9 b': 'bkntwbwtbnk',
    '3-4 j': 'jjjjj',
    '2-12 z': 'qznmdxwggvnz',
    '3-7 s': 'ssssslsssjssss',
    '4-11 d': 'xdjddkjvqdddpddlmdmq',
    '3-5 r': 'rrnrrrrdrr',
    '6-8 g': 'zbgwtwzg',
    '2-3 l': 'lmll',
    '5-11 t': 'pvnmcqlcnztqf',
    '5-6 j': 'jcljjdmmd',
    '13-14 z': 'zzzzzzzzzzzzgr',
    '4-6 q': 'xvcwqtd',
    '6-9 t': 'tttttdttbtt',
    '1-5 m': 'mmmmmmmmmmmbmmmmm',
    '4-5 h': 'hnvvpgtgmh',
    '3-7 t': 'ttpttttt',
    '5-6 t': 'ngtttt',
    '2-9 h': 'jxhhhhhhhhhhhlhwpgg',
    '3-15 l': 'sslflhrrkcgvlhw',
    '8-10 g': 'ggggwggbgdgg',
    '8-14 t': 'tjttlttrhtgvtm',
    '7-8 m': 'mmmmmfmm',
    '10-11 n': 'kwnvzvnlnkn',
    '7-11 f': 'fffffhjffffff',
    '1-16 g': 'gggggggggggggggsggg',
    '8-11 z': 'ntpzzdfzpzz',
    '15-18 v': 'vwvnvvbvvkvvvvdjvjv',
    '8-17 z': 'zzzzzzzgzzzzzzzznzz',
    '7-8 j': 'jjfjjjjjjmrj',
    '9-14 q': 'dprqqqzcfmcqqxqq',
    '5-7 w': 'wwwwwwhw',
    '10-11 g': 'gggggghggwmg',
    '1-2 x': 'nhxx',
    '9-10 t': 'tttktttlvttv',
    '6-9 j': 'zpjhrjjffq',
    '16-19 v': 'fvmrhxmvbvppzpwvvxbq',
    '1-3 b': 'sbbbb',
    '2-9 t': 'btbqhwgttpx',
    '4-5 r': 'zdzrr',
    '2-3 q': 'qqfq',
    '8-9 j': 'vsjhjqvmjjx',
    '5-14 l': 'llllwllllkllldllll',
    '9-12 t': 'fltmrbqsjhqt',
    '6-8 z': 'xdzzzlzzbj',
    '3-20 f': 'zjrwrnzmlswpsrfjgjht',
    '11-12 v': 'zjxrkvjkwqvf',
    '11-15 r': 'rrrrrrrrrrtrrrjr',
    '1-5 l': 'qlxlcllkllllwl',
    '11-12 s': 'ssssssssssts',
    '7-8 p': 'ppppppxw',
    '7-9 b': 'bbbbhbnbfdbbbdb',
    '4-8 f': 'grmvkbqbflnz',
    '18-19 w': 'wgwwwwwwwwwwwwwwwdqw',
    '6-14 r': 'rrrrrtrrrrrrrlrrrrv',
    '1-2 t': 'tttttttgtztt',
    '5-8 j': 'jxfjjjjjpfj',
    '6-15 k': 'kfqnbvrjkmxptfdnnrkk',
    '7-8 m': 'mmmmmmcqmmm',
    '6-13 p': 'pppppppppppprpppppp',
    '1-5 d': 'wdrpd',
    '7-9 b': 'bbbbbbbbzbbbbb',
    '3-11 j': 'jkrdcvmfctjvr',
    '3-9 t': 'vpnqgxmjqccmjpkdt',
    '3-7 l': 'llllllll',
    '5-8 f': 'fffcnczfrfs',
    '11-16 h': 'hhhshchnhxpshpdh',
    '5-6 x': 'cxxtdx',
    '11-15 k': 'gxltfbjcplqkkdhlc',
    '3-9 g': 'twgvrlcgjljpwmrnxdtn',
    '1-7 x': 'xxdxxxxxqqlxxxx',
    '2-4 n': 'nnnt',
    '11-13 h': 'hhhhhhhhhhlhhh',
    '12-13 d': 'csddgmqzwmzmnj',
    '11-12 h': 'hhbvhhhhchhx',
    '7-11 h': 'hhhhhhhshhmhhh',
    '15-16 w': 'wwwwwwwswwwwwwbh',
    '3-4 f': 'sfffffffk',
    '9-14 g': 'ggggggfggggggg',
    '11-13 p': 'pppppppdppppppppppps',
    '10-12 v': 'vhvvvvvvvgvnvvvfvv',
    '1-19 l': 'lqlpllcdnllblkldlvp',
    '2-3 t': 'rnbj',
    '12-13 d': 'ddddsddddddbdqfdqld',
    '2-15 l': 'klrxxlgjbvdqxgtgwpn',
    '2-4 d': 'ddnp',
    '7-8 d': 'dzdddjmtd',
    '3-16 r': 'rrwrrrrrrrrrrrrrrr',
    '11-12 d': 'rdddddddkddwrdx',
    '6-8 z': 'zzzzgzlqzzvkz',
    '15-18 g': 'gggggggggggggggggcgg',
    '6-11 c': 'zcvcsxmclmrwk',
    '5-11 h': 'hqszlhzshhjh',
    '5-6 z': 'zjwzzz',
    '8-12 q': 'qqqqqqqqqqqqqq',
    '4-6 d': 'tdddtdrlx',
    '2-5 s': 'zbfljqksqrnfrwrw',
    '5-7 d': 'ddkddwzd',
    '5-6 p': 'hpxpxp',
    '7-9 g': 'ggggggxgw',
    '3-5 b': 'tbfzb',
    '9-14 z': 'pzszffgpzkkzczbznn',
    '14-18 s': 'tsssslssslsrmzsvfzs',
    '9-10 h': 'hhhhhhhhnhh',
    '8-9 w': 'wnvwrxpwwzsmdzwmwl',
    '1-2 d': 'qddddd',
    '4-8 k': 'kkklkkkkkkk',
    '3-4 m': 'kmzvvm',
    '10-12 t': 'xntkttqkhgthrfhk',
    '7-13 n': 'nnnnvrkznnnnn',
    '1-4 l': 'lllklx',
    '3-4 p': 'pnns',
    '6-8 r': 'rrrrrdpr',
    '5-10 v': 'vnztdmgllb',
    '12-15 z': 'zzzzzzzzzzzgzzm',
    '2-5 j': 'kjkkmjvcr',
    '4-13 r': 'rrrrrrrrrrrrmzrr',
    '3-6 w': 'wktbfw',
    '6-8 h': 'hhhhhzhhhhh',
    '5-16 m': 'dxlsprxpxflmmdls',
    '3-4 v': 'xqvr',
    '8-11 k': 'kkkkkkklkkkk',
    '3-4 t': 'qtmsttdttmzthtttt',
    '4-6 w': 'wkwbkww',
    '1-2 d': 'dddc',
    '9-10 b': 'bbbbbbbbbb',
    '11-12 n': 'nnnnnnnnnnnnhn',
    '9-10 m': 'nmhjhtmvvm',
    '2-5 l': 'hgllrllllllll',
    '3-4 t': 'tvtkt',
    '5-6 p': 'bpbmppwpqnpxp',
    '4-8 r': 'rrrnrrrrrrm',
    '6-12 z': 'zhzbzszkzwbgvz',
    '13-14 b': 'bjbbbcbqdbbbjwbbbbbb',
    '4-8 n': 'nnnnnnnnn',
    '6-10 l': 'lllllllllll',
    '4-6 q': 'qqqqqqq',
    '3-5 d': 'bddzv',
    '9-10 l': 'vllwpvltmwvl',
    '7-14 p': 'cppbprpppppphm',
    '12-17 k': 'kkkkkkkkkkkkkkkkkkk',
    '6-7 t': 'wstglttttltwqpxd',
    '2-5 t': 'wtrkt',
    '10-18 v': 'vvvvvvvvrgkbvvsvvvv',
    '8-9 p': 'nvsqptgpphmh',
    '5-7 c': 'jccvlccsmqbrfnspf',
    '4-6 g': 'zsggtg',
    '6-8 p': 'pppphpqdppdp',
    '2-14 f': 'kqfffffgfffffdffff',
    '7-9 h': 'whhhhhhhh',
    '2-3 w': 'wmlwwwwwwwwwwwwwwwzw',
    '5-6 h': 'hhhhghhhhhx',
    '1-5 z': 'dzzzzzzz',
    '14-16 g': 'ggggggggggggglghl',
    '4-8 c': 'ccfcmcccccf',
    '2-3 h': 'hwhd',
    '9-12 w': 'wwwczwwwzwwwwwwww',
    '2-3 b': 'bpqb',
    '2-7 b': 'dbrxzktblnqgj',
    '2-8 w': 'wgwwwwwbtw',
    '6-11 b': 'bbbbbbbbbbbb',
    '7-12 m': 'ztmpmzvmtmbc',
    '4-5 f': 'kxhkg',
    '12-13 n': 'xlnqqnbdqnfvnldjf',
    '3-4 r': 'jzrr',
    '9-12 q': 'qqqqwqqqsqvbqcs',
    '11-12 c': 'txkdrczkwcccbjfwctcg',
    '9-11 w': 'xwwwwwjdrwgwgrw',
    '4-12 n': 'qfnpgktmggzmr',
    '2-11 t': 'ttflcgqrrmx',
    '8-15 d': 'rdjkddzdddpttdbg',
    '9-12 d': 'ddddddddbdddvd',
    '5-10 h': 'lhvlhhctdhdq',
    '10-16 b': 'nbbbbbbbbsmcmbbr',
    '5-10 d': 'qmddddddddd',
    '4-6 h': 'hhhhthh',
    '2-5 j': 'jjksjmmsvttvfsgf',
    '7-9 c': 'xbhznccvk',
    '9-13 m': 'pshmvvqqmnkkmklrhxq',
    '8-9 s': 'ssssssssssss',
    '13-17 p': 'wpnmpwjbntllpqmhp',
    '6-7 d': 'ddddddkddddd',
    '6-7 p': 'gvpspmj',
    '3-15 s': 'gwsllhxsrfzqlmsls',
    '5-7 v': 'vvvvvvwvv',
    '4-5 x': 'mvxjx',
    '2-5 q': 'bpkjqqqttgpddg',
    '4-6 d': 'dddhdhd',
    '4-6 s': 'scsncs',
    '5-10 m': 'mmmmpmmmmkmmmm',
    '5-14 r': 'rrrrrrrrrrrrrsrrrr',
    '7-10 d': 'zddddddldxtmfzddd',
    '2-5 x': 'vxwxz',
    '2-5 h': 'khxnhmczfhrwdkggd',
    '12-16 v': 'vvvrvfvvvkvvvvvxkvc',
    '3-4 f': 'rcbf',
    '11-15 m': 'mklrxvmkmmvmmzmm',
    '9-14 w': 'qwwwwwlwbwwwwswww',
    '7-16 z': 'zzzzzzbzzzzzzzzpzzzz',
    '16-18 f': 'fffffffqffffffffff',
    '1-5 l': 'llllll',
    '3-4 m': 'vmmmpcd',
    '15-18 j': 'jjjjjjjjjjjjjjmjjjj',
    '3-4 g': 'ggdgg',
    '12-14 x': 'xrmzlxxlrxfglxj',
    '3-4 f': 'tfxrbbffqf',
    '7-8 p': 'pppppbvpc',
    '12-13 t': 'tttttfzwtttvt',
    '7-8 n': 'nnnnnnns',
    '10-12 d': 'dwjdddddwdkqdm',
    '4-6 f': 'fzwrzjrcq',
    '6-8 b': 'tbbbbbcbbbbb',
    '4-7 v': 'vvvgvvvv',
    '18-19 k': 'kkkkkkkkkkkkkkkkkkm',
    '7-10 l': 'llllllcllll',
    '1-6 d': 'bdddddddd',
    '8-14 r': 'rrrrwrxrrrrrrgrrdrz',
    '2-10 n': 'nfnnnnlnnnnn',
    '5-6 l': 'lklllhl',
    '17-19 r': 'rrrrrrrrrrrrrrrrrrj',
    '4-7 p': 'tknpspbhpcr',
    '5-7 x': 'tvhrbsrtf',
    '10-11 x': 'xxxxxxxxxxxx',
    '13-15 v': 'vsbvvbvlvqcznwvvvh',
    '4-5 v': 'vpsdlnvvbvvvpfqvvvv',
    '16-18 k': 'lrhszjpkxkqpzskzbkvt',
    '12-13 c': 'ccccccccccccdc',
    '9-14 p': 'ppvppppppppppppppppp',
    '5-11 b': 'pjbbbbbbbbblbvb',
    '2-4 m': 'fmtwnjwlfcsgpdmxhtd',
    '7-12 l': 'zflcvdlllfkvtfqptll',
    '11-12 g': 'ggggggnjghggkggfn',
    '8-10 z': 'dfzxgzzbpz',
    '5-6 w': 'wwwfkc',
    '9-10 w': 'wwwwwwbwwhww',
    '5-6 g': 'kgggjg',
    '4-8 s': 'ssssssscs',
    '12-20 t': 'ttttttltttvttttttttt'
};

module.exports = {testData};
