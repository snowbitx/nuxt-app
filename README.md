# 目录结构

├── app/
│   ├── layout/
│   ├── middleware/
│   ├── plugins/
│   └── providers/
│
├── components/
│   ├── ui/                 # shadcn 原子组件（Button/Input/...）
│   ├── base/               # 基础封装组件
│   ├── business/           # 业务组件（强加分）
│   └── layout/             # 布局组件
│
├── composables/
│   ├── useAuth.ts
│   ├── usePermission.ts
│   ├── useTheme.ts
│   ├── useRequest.ts
│   └── useProTable.ts
│
├── features/               # ⭐ 高级项目核心：按业务模块划分
│   ├── auth/
│   │   ├── api.ts
│   │   ├── composables.ts
│   │   └── components/
│   ├── dashboard/
│   ├── user/
│   ├── system/
│   └── ai/
│
├── design-system/          # ⭐ shadcn 高级化核心
│   ├── tokens/
│   ├── themes/
│   ├── variants/
│   └── index.ts
│
├── server/
│   ├── api/                # BFF 接口层
│   ├── services/           # 服务层
│   └── utils/
│
├── utils/
├── types/
├── constants/
├── docs/                   # 架构文档
├── tests/
