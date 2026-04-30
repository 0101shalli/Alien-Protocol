export const InjectRepository = () => () => undefined;
export const getRepositoryToken = (entity: any) => `${entity?.name ?? 'Entity'}Repository`;
