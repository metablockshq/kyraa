import { SystemProgram, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { programIds } from '../factory';
import { WithdrawNftArgs } from '../types';

export const getWithdrawNftInstruction = (args: WithdrawNftArgs) => {
  const withdrawArgs = {};

  // withdraw nft
  return args.program.instruction.withdrawNftV1(withdrawArgs, {
    accounts: {
      wrappedUserNft: args.pdaKeys.wrappedUserNft,
      vault: args.pdaKeys.vaultKey,
      authority: args.usersKey,
      universe: args.pdaKeys.universeKey,
      userNftAta: args.pdaKeys.userNftAta,
      vaultNftAta: args.pdaKeys.vaultNftAta,
      tokenMint: args.pdaKeys.mint,
      receiptMint: args.pdaKeys.receiptMint,
      userReceiptAta: args.pdaKeys.userReceiptAta,
      vaultReceiptAta: args.pdaKeys.vaultReceiptAta,
      metaNft: args.pdaKeys.metaNft,
      metaNftMint: args.pdaKeys.metaNftMint,
      metaNftMintAta: args.pdaKeys.metaNftMintAta,
      metaBlocksAuthority: args.pdaKeys.metaBlocksAuthority,
      tokenProgram: programIds.TOKEN_PROGRAM_ID,
      associatedTokenProgram: programIds.ASSOCIATED_TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
      metaNftProgram: programIds.META_NFT_PROGRAM_ID,
    },
  });
};
