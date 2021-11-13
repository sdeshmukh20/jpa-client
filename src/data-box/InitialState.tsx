import { JpaState } from "../jpa_models/models";

export function emptyJpaState(): JpaState {
    let emptyState = {
        entityMap:
        {
            'default': {
                entityName: '--',
                rowMap: new Map(),
            }
        },
        selectedEntity: 'default',
        title: 'Father',
        entityCount: 0,
        viewId: -1,
        flags:{
            hideEntityRows:false,
            entityClicked:false,
            entityListOccurance:0,
            entityNames:[],
            homeInitiated:false
        }
    }
    return emptyState;
}