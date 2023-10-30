import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum ExerciseType {
  ISOLATION = 'isolation',
  COMPOUND = 'compound',
}

export enum MuscleGroup {
  UPPER_BACK = 'Upper back',
  LATS = 'Lats',
  SPINAL_ERECTORS = 'Spinal erectors'
  
}


@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  targetMuscleGroup: string;

  @Column()
  agonistMuscle: string;

  @Column('simple-array')
  synergistMuscles: string[];

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GHOST,
})
role: UserRole
  type: string;
  
}
