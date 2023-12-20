import { SpaceBetween } from '../../ui/stack';

export const GameSummaryPage = () => {
  return (
    <div>
      <h1>Game Summary Page</h1>

      <SpaceBetween>
        <section className={'bg-red-500'}>
          <h2>Players</h2>
        </section>
        <section className={'bg-red-500'}>
          <h2>Actions</h2>
        </section>
        <section className={'bg-red-500'}>
          <h2>Actions2</h2>
        </section>
      </SpaceBetween>
    </div>
  );
};
